using rebus.Business.Validation;
using System;
using System.Collections.Generic;
using System.Text;

namespace rebus.Business.Model
{
    public interface IModel
    {
        /// <summary>
        /// Идентификатор
        /// </summary>
        long ID { get; set; }

        /// <summary>
        /// Строкое представление идентификатора
        /// </summary>
        string StrID { get; set; }

        /// <summary>
        /// Валидация модели
        /// </summary>
        /// <returns>Результат валидации</returns>
        ModelValidationResult Validate();
    }
}
