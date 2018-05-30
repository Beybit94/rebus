using Dapper;
using rebus.DAL.Access;
using rebus.DAL.Extensions;
using rebus.DAL.Model;
using rebus.DAL.Queries;
using rebus.DAL.Queries.Level;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;

namespace rebus.DAL.Repositories
{
    public class LevelRepository : Repository<Level>
    {
        public LevelRepository(IUnitOfWork unitOfWork) : base(unitOfWork)
        {
        }

        public override Level Get(long id)
        {
            if (id <= 0) throw new ArgumentOutOfRangeException(nameof(id));
            var entity = UnitOfWork.Session.QuerySingleOrDefault<Level>(@"SELECT TOP 1 * FROM Levels WHERE id = @id", new { id });

            if (entity == null) return entity;

            entity.Rebuses = UnitOfWork.Session.Query<Rebus>(@"SELECT TOP 1 * FROM Rebuses WHERE levelid = @id", new { id }).ToList();

            return entity;
        }

        public override List<Level> List(ListQuery listQuery)
        {
            if (listQuery == null) throw new ArgumentNullException(nameof(listQuery));

            var query = listQuery as LevelListQuery;
            if (query == null) throw new InvalidCastException(nameof(query));

            var page = listQuery.Page();

            var entity = UnitOfWork.Session.Query<Level>($@"SELECT * FROM Levels", query).ToList();
            foreach (var item in entity)
            {
                item.Rebuses = UnitOfWork.Session.Query<Rebus>($@"SELECT * FROM Rebuses r where r.levelid=@levelId", new { levelId = item.ID }).ToList();
            }

            return entity;
        }

        public override void Insert(Level entity)
        {
            using (var transaction = UnitOfWork.BeginTransaction())
            {
                try
                {
                    entity.ID = UnitOfWork.Session.QuerySingleOrDefault<long>(@"
INSERT INTO Levels ( id, name, isPro )
VALUES ( @ID, @Name, @IsPro )
SELECT SCOPE_IDENTITY()", entity, UnitOfWork.Transaction);

                    transaction.Commit();
                }
                catch (SqlException e)
                {
                    if (e.Number == 2627)
                    {
                        throw new DuplicateWaitObjectException();
                    }

                    throw;
                }
                catch (Exception)
                {
                    throw;
                }
            }
        }

        public override void Update(Level entity)
        {
            UnitOfWork.Session.Execute(@"
UPDATE Levels
SET name = @Name, isPro = @IsPro
WHERE id = @ID", entity, UnitOfWork.Transaction);
        }

        public override void Delete(long id)
        {
            using (var transaction = UnitOfWork.BeginTransaction())
            {
                UnitOfWork.Session.Execute(@"DELETE * FROM Rebuses WHERE levelid = @id", new { id }, UnitOfWork.Transaction);
                UnitOfWork.Session.Execute(@"DELETE * FROM Levels WHERE id = @id", new { id }, UnitOfWork.Transaction);

                transaction.Commit();
            }
        }

        public override int Count(ListQuery listQuery)
        {
            if (listQuery == null) throw new ArgumentNullException(nameof(listQuery));

            var query = listQuery as LevelListQuery;
            if (query == null) throw new InvalidCastException(nameof(query));

            var page = listQuery.Page();
            return UnitOfWork.Session.ExecuteScalar<int>($@"SELECT COUNT(DISTINCT l.id) FROM Levels l", query);
        }

        public override Level Find(Query query)
        {
            throw new NotImplementedException();
        }

        public override List<TM> List<TM>(ListQuery query)
        {
            throw new NotImplementedException();
        }

    }
}
