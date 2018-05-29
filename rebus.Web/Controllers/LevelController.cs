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

        public ListModel<LevelModel> Get(LevelListQueryModel query)
        {
            return _levelManager.List(query);
        }
    }
}