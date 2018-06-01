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
    [Route("api/Rebus")]
    public class RebusController : Controller
    {
        private readonly RebusManager _rebusManager;
        public RebusController(RebusManager rebusManager)
        {
            _rebusManager = rebusManager;
        }

        public IActionResult Get(RebusListQueryModel query)
        {
            try
            {
                return Json(_rebusManager.List(query).Data);
            }
            catch (Exception)
            {
                return Json(new { error = "error" });
            }
        }

        [HttpGet("{id}")]
        public IActionResult Get(long id)
        {
            try
            {
                return Json(_rebusManager.Get(id));
            }
            catch (Exception)
            {
                return Json(new { error = "error" });
            }
        }

        [HttpPut]
        public IActionResult Edit([FromBody]RebusModel model, long id)
        {
            if (id <= 0) return Json(new { error = "error" });

            try
            {
                return Json(_rebusManager.Save(model));
            }
            catch (Exception)
            {
                return Json(new { error = "error" });
            }
        }

        [HttpPost]
        public IActionResult Create([FromBody]RebusModel model)
        {
            try
            {
                return Json(_rebusManager.Save(model));
            }
            catch (Exception)
            {
                return Json(new { error = "error" });
            }
        }

        [HttpDelete]
        public IActionResult Delete(long id)
        {
            try
            {
                _rebusManager.Delete(id);
                return Ok();
            }
            catch (Exception)
            {
                return Json(new { error = "error" });
            }
        }
    }
}