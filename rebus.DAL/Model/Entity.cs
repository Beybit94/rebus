using System;
using System.Collections.Generic;
using System.Text;

namespace rebus.DAL.Model
{

    /// <summary>
    /// Базовый класс сущности базы данных
    /// </summary>
    public abstract class Entity : IEntity
    {
        /// <summary>
        /// Идентификатор
        /// </summary>
        public long ID { get; set; }
    }
}
