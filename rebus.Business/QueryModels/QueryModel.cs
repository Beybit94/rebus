using rebus.Business.Validation;
using System;
using System.Collections.Generic;
using System.Text;

namespace rebus.Business.QueryModels
{
    public abstract class QueryModel
    {
        /// <summary>
        /// Валидация модели
        /// </summary>
        /// <returns>Результаты валидации</returns>
        public abstract ModelValidationResult Validate();
    }
}
