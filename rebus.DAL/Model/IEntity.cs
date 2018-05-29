using System;
using System.Collections.Generic;
using System.Text;

namespace rebus.DAL
{
    /// <summary>
    /// Базовый интерфейс сущности базы данных
    /// </summary>
    public interface IEntity
    {
        /// <summary>
        /// Идентификатор
        /// </summary>
        long ID { get; set; }
    }
}
