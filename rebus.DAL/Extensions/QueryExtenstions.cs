using rebus.DAL.Queries;
using System;
using System.Collections.Generic;
using System.Text;

namespace rebus.DAL.Extensions
{
    public static class QueryExtenstions
    {
        public static string Page(this ListQuery query)
        {
            return query?.Limit == 0 ? null : "OFFSET (@offset) ROWS FETCH NEXT @limit ROWS ONLY";
        }
    }
}
