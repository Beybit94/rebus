using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using rebus.Business.Manager;
using rebus.Business.Model;
using rebus.Business.QueryModels.Level;

namespace rebus.Web.Controllers
{
    [Produces("application/json")]
    [Route("api/Level")]
    public class LevelController : Controller
    {
        private readonly LevelManager _levelManager;

        public LevelController(LevelManager levelManager)
        {
            _levelManager = levelManager;
        }

        public IActionResult Get(LevelListQueryModel query)
        {
            try
            {
                return Json(_levelManager.List(query));
            }
            catch (Exception)
            {
                return Json("error");
            }
        }

        public IActionResult Get(long id)
        {
            try
            {
                return Json(_levelManager.Get(id));
            }
            catch (Exception)
            {
                return Json("error");
            }
        }

        [HttpPut]
        public IActionResult Edit([FromBody]LevelModel model, long id)
        {
            if (id <= 0) return Json("error");

            try
            {
                return Json(_levelManager.Save(model));
            }
            catch (Exception)
            {
                return Json("error");
            }
        }

        [HttpPost]
        public IActionResult Create([FromBody]LevelModel model)
        {
            try
            {
                return Json(_levelManager.Save(model));
            }
            catch (Exception)
            {
                return Json("error");
            }
        }

        [HttpDelete]
        public IActionResult Delete(long id)
        {
            try
            {
                _levelManager.Delete(id);
                return Ok();
            }
            catch (Exception)
            {
                return Json("error");
            }
        }
    }
}