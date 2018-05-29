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

        public ListModel<RebusModel> Get(RebusListQueryModel query)
        {
            return _rebusManager.List(query);
        }
    }
}