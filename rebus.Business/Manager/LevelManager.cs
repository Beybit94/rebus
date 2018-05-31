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

        public LevelModel Get(long id)
        {
            if (id <= 0) throw new ArgumentOutOfRangeException(nameof(id));
            var entity = _levelRepository.Get(id);
            return Mapper.Map<LevelModel>(entity);
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

        public LevelModel Save(LevelModel model)
        {
            var validationResult = model.Validate();
            if (!validationResult.IsValid)
            {
                throw new ApplicationException(validationResult.Message);
            }

            var entity = Mapper.Map<DAL.Model.Level>(model);
            if (entity.ID > 0)
            {
                _levelRepository.Update(entity);
            }
            else
            {
                _levelRepository.Insert(entity);
            }

            return Mapper.Map<LevelModel>(entity);
        }

        public void Delete(long id)
        {
            if (id <= 0) throw new ArgumentOutOfRangeException(nameof(id));
            _levelRepository.Delete(id);
        }
    }
}
