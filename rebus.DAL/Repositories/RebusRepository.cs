using Dapper;
using rebus.DAL.Access;
using rebus.DAL.Extensions;
using rebus.DAL.Model;
using rebus.DAL.Queries;
using rebus.DAL.Queries.Rebus;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;

namespace rebus.DAL.Repositories
{
    public class RebusRepository : Repository<Rebus>
    {
        public RebusRepository(IUnitOfWork unitOfWork) : base(unitOfWork)
        {
        }

        public override Rebus Get(long id)
        {
            if (id <= 0) throw new ArgumentOutOfRangeException(nameof(id));
            var entity = UnitOfWork.Session.QuerySingleOrDefault<Rebus>(@"SELECT TOP 1 * FROM Rebuses WHERE id = @id", new { id });
            entity.Level = UnitOfWork.Session.QuerySingleOrDefault<Level>($@"SELECT * FROM Levels l where l.id=@levelid", new { levelid = entity.LevelId });
            return entity;
        }

        public override List<Rebus> List(ListQuery listQuery)
        {
            if (listQuery == null) throw new ArgumentNullException(nameof(listQuery));

            var query = listQuery as RebusListQuery;
            if (query == null) throw new InvalidCastException(nameof(query));

            var page = listQuery.Page();

            var entity = UnitOfWork.Session.Query<Rebus>($@"SELECT * FROM Rebuses r", query).ToList();
            foreach (var item in entity)
            {
                item.Level = UnitOfWork.Session.QuerySingleOrDefault<Level>($@"SELECT * FROM Levels l where l.id=@levelid", new { levelid = item.LevelId });
            }

            return entity;
        }

        public override void Insert(Rebus entity)
        {
            using (var transaction = UnitOfWork.BeginTransaction())
            {
                try
                {
                    entity.ID = UnitOfWork.Session.QuerySingleOrDefault<long>(@"
INSERT INTO Rebuses ( img, answer, levelid )
VALUES ( @Img, @Answer, @LevelId )
SELECT SCOPE_IDENTITY()", new { Img = entity.Img, Answer = entity.Answer, LevelId = entity.LevelId }, UnitOfWork.Transaction);

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

        public override void Update(Rebus entity)
        {
            UnitOfWork.Session.Execute(@"
UPDATE Rebuses
SET img = @Img, answer = @Answer, levelid = @LevelId
WHERE id = @ID", new { Img = entity.Img, Answer = entity.Answer, LevelId = entity.LevelId, ID = entity.ID }, UnitOfWork.Transaction);

        }

        public override void Delete(long id)
        {
            using (var transaction = UnitOfWork.BeginTransaction())
            {
                UnitOfWork.Session.Execute(@"DELETE FROM Rebuses WHERE id = @id", new { id }, UnitOfWork.Transaction);

                transaction.Commit();
            }
        }

        public override int Count(ListQuery listQuery)
        {
            if (listQuery == null) throw new ArgumentNullException(nameof(listQuery));

            var query = listQuery as RebusListQuery;
            if (query == null) throw new InvalidCastException(nameof(query));

            var page = listQuery.Page();
            return UnitOfWork.Session.ExecuteScalar<int>($@"SELECT COUNT(DISTINCT r.id) FROM Rebuses r", query);
        }

        public override Rebus Find(Query query)
        {
            throw new NotImplementedException();
        }

        public override List<TM> List<TM>(ListQuery query)
        {
            throw new NotImplementedException();
        }
    }
}
