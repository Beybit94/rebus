using AutoMapper;
using rebus.Business.Model;
using rebus.Business.QueryModels.Level;
using rebus.Business.QueryModels.Rebus;
using rebus.DAL.Model;
using rebus.DAL.Queries.Level;
using rebus.DAL.Queries.Rebus;
using System;
using System.Collections.Generic;
using System.Text;

namespace rebus.Business.Mappers
{
    public class EntityToModelMappingProfile : Profile
    {
        public EntityToModelMappingProfile()
        {
            #region Level
            CreateMap<Level, LevelModel>();
            #endregion

            #region Rebus
            CreateMap<Rebus, RebusModel>();
            #endregion
        }

        public override string ProfileName => "EntityToModelMappingProfile";
    }
}
