using System;
using System.Collections.Generic;
using System.Text;

namespace rebus.Business.Model
{
    /// <summary>
    /// Базовый класс возврата постраничных списков
    /// </summary>
    /// <typeparam name="T">Тип возвращаемых данных</typeparam>
    public class ListModel<T>
    {
        /// <summary>
        /// Данные
        /// </summary>
        public List<T> Data { get; set; }

        /// <summary>
        /// Общее количество записей
        /// </summary>
        public int Total { get; set; }
    }
}
