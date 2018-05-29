using Dapper;
using rebus.DAL.Access;
using rebus.DAL.Extensions;
using rebus.DAL.Model;
using rebus.DAL.Queries;
using rebus.DAL.Queries.Rebus;
using System;
using System.Collections.Generic;
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
            throw new NotImplementedException();
        }

        public override List<Rebus> List(ListQuery listQuery)
        {
            if (listQuery == null) throw new ArgumentNullException(nameof(listQuery));

            var query = listQuery as RebusListQuery;
            if (query == null) throw new InvalidCastException(nameof(query));

            var page = listQuery.Page();

            var entity = UnitOfWork.Session.Query<Rebus>($@"SELECT * FROM Rebuses r", query).ToList();

            return entity;
        }

        public override void Insert(Rebus entity)
        {
            throw new NotImplementedException();
        }

        public override void Update(Rebus entity)
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
