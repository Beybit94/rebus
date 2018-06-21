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
    [Route("api/[controller]/[action]")]
    public class LevelController : Controller
    {
        private readonly LevelManager _levelManager;

        public LevelController(LevelManager levelManager)
        {
            _levelManager = levelManager;
        }

        public JsonResult List(LevelListQueryModel query)
        {
            try
            {
                return Json(_levelManager.List(query).Data);
            }
            catch (Exception ex)
            {
                return Json(new { error = ex.Message });
            }
        }

        [HttpGet("{id}")]
        public JsonResult Get(long id)
        {
            try
            {
                return Json(_levelManager.Get(id));
            }
            catch (Exception ex)
            {
                return Json(new { error = ex.Message });
            }
        }

        [HttpPut]
        public JsonResult Edit([FromBody]LevelModel model)
        {
            if (model.ID <= 0) return Json(new { error = "error" });

            try
            {
                return Json(_levelManager.Save(model));
            }
            catch (Exception ex)
            {
                return Json(new { error = ex.Message });
            }
        }

        [HttpPost]
        public JsonResult Create([FromBody]LevelModel model)
        {
            try
            {
                return Json(_levelManager.Save(model));
            }
            catch (Exception ex)
            {
                return Json(new { error = ex.Message });
            }
        }

        [HttpDelete("{id}")]
        public JsonResult Delete(long id)
        {
            try
            {
                _levelManager.Delete(id);
                return Json(new { success = "success" });
            }
            catch (Exception ex)
            {
                return Json(new { error = ex.Message });
            }
        }
    }
}