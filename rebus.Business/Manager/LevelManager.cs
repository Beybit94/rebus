using AutoMapper;
using rebus.Business.Model;
using rebus.Business.QueryModels.Level;
using rebus.DAL.Queries.Level;
using rebus.DAL.Repositories;
using System;
using System.Collections.Generic;
using System.Text;

namespace rebus.Business.Manager
{
    public class LevelManager
    {
        private readonly LevelRepository _levelRepository;
        
        public LevelManager(LevelRepository levelRepository)
        {
            _levelRepository = levelRepository;
        }

        public ListModel<LevelModel> List(LevelListQueryModel queryModel)
        {
            queryModel.Limit = 10;
            var validationResult = queryModel.Validate();
            if (!validationResult.IsValid)
            {
                throw new ApplicationException(validationResult.Message);
            }
            
            var query = Mapper.Map<LevelListQuery>(queryModel);
            var entity = _levelRepository.List(query);

            return new ListModel<LevelModel>
            {
                Data = Mapper.Map<List<LevelModel>>(entity),
                Total = _levelRepository.Count(query)
            };
        }
    }
}
