using Dapper;
using rebus.DAL.Access;
using rebus.DAL.Extensions;
using rebus.DAL.Model;
using rebus.DAL.Queries;
using rebus.DAL.Queries.Level;
using System;
using System.Collections.Generic;
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
            throw new NotImplementedException();
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
            throw new NotImplementedException();
        }

        public override void Update(Level entity)
        {
            throw new NotImplementedException();
        }

        public override void Delete(long id)
        {
            throw new NotImplementedException();
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
