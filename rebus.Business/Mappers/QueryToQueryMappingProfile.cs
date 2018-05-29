using AutoMapper;
using rebus.Business.QueryModels.Level;
using rebus.Business.QueryModels.Rebus;
using rebus.DAL.Queries.Level;
using rebus.DAL.Queries.Rebus;
using System;
using System.Collections.Generic;
using System.Text;

namespace rebus.Business.Mappers
{
    public class QueryToQueryMappingProfile:Profile
    {
        public QueryToQueryMappingProfile()
        {
            #region Level
            CreateMap<LevelListQueryModel, LevelListQuery>();
            #endregion

            #region Rebus
            CreateMap<RebusListQueryModel, RebusListQuery>();
            #endregion
        }
        public override string ProfileName => "QueryToQueryMappingProfile";
    }
}
