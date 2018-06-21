using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using rebus.Business.Manager;
using rebus.Business.Model;
using rebus.Business.QueryModels.Rebus;

namespace rebus.Web.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]/[action]")]
    public class RebusController : Controller
    {
        private readonly RebusManager _rebusManager;
        public RebusController(RebusManager rebusManager)
        {
            _rebusManager = rebusManager;
        }

        public JsonResult List(RebusListQueryModel query)
        {
            try
            {
                return Json(_rebusManager.List(query).Data);
            }
            catch (Exception ex)
            {
                return Json(new { error = ex.Message});
            }
        }

        [HttpGet("{id}")]
        public JsonResult Get(long id)
        {
            try
            {
                return Json(_rebusManager.Get(id));
            }
            catch (Exception ex)
            {
                return Json(new { error = ex.Message });
            }
        }

        [HttpPut]
        public JsonResult Edit([FromBody]RebusModel model)
        {
            if (model.ID <= 0) return Json(new { error = "error" });

            try
            {
                return Json(_rebusManager.Save(model));
            }
            catch (Exception ex)
            {
                return Json(new { error = ex.Message });
            }
        }

        [HttpPost]
        public JsonResult Create([FromBody]RebusModel model)
        {
            try
            {
                return Json(_rebusManager.Save(model));
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
                _rebusManager.Delete(id);
                return Json(new { success = "success" });
            }
            catch (Exception ex)
            {
                return Json(new { error = ex.Message });
            }
        }
    }
}