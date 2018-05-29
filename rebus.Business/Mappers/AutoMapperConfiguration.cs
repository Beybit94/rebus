using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;

namespace rebus.Business.Mappers
{
    public class AutoMapperConfiguration
    {
        public static void Configure()
        {
            Mapper.Initialize(mapper =>
            {
                mapper.AddProfile<EntityToModelMappingProfile>();
                mapper.AddProfile<ModelToEntityMappingProfile>();
                mapper.AddProfile<QueryToQueryMappingProfile>();
            });
        }
    }
}
