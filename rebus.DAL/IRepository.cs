using System;
using System.Collections.Generic;
using System.Text;

namespace rebus.DAL
{
    public interface IRepository<T> where T:class
    {
        IEnumerable<T> Get();
        T Get(int id);
        void Add(T entity);
        void Delete(int id);
        void Update(T entity);
    }
}
