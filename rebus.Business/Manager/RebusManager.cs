using AutoMapper;
using rebus.Business.Model;
using rebus.Business.QueryModels.Rebus;
using rebus.DAL.Queries.Rebus;
using rebus.DAL.Repositories;
using System;
using System.Collections.Generic;
using System.Text;

namespace rebus.Business.Manager
{
    public class RebusManager
    {
        private readonly LevelRepository _levelRepository;
        private readonly RebusRepository _rebusRepository;

        public RebusManager(RebusRepository rebusRepository,LevelRepository levelRepository)
        {
            _levelRepository = levelRepository;
            _rebusRepository = rebusRepository;
        }

        public ListModel<RebusModel> List(RebusListQueryModel queryModel)
        {
            queryModel.Limit = 10;
            var validationResult = queryModel.Validate();
            if (!validationResult.IsValid)
            {
                throw new ApplicationException(validationResult.Message);
            }

            var query = Mapper.Map<RebusListQuery>(queryModel);
            var entity = _rebusRepository.List(query);
            

            return new ListModel<RebusModel>
            {
                Data = Mapper.Map<List<RebusModel>>(entity),
                Total = _rebusRepository.Count(query)
            };
        }
    }
}
