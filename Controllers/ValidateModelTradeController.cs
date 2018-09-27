using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using WebAngularRAC.DBcontext;
using WebAngularRAC.Models;

namespace WebAngularRAC.Controllers
{
    [Route("api/[controller]")]
    public class ValidateModelTradeController : Controller
    {

        DatabaseContext _DatabaseContext;
        public ValidateModelTradeController(DatabaseContext DatabaseContext)
        {
            _DatabaseContext = DatabaseContext;
        }

        // POST api/values
        [HttpPost]
        public bool Post([FromBody]Register1 reg)
        {
            try
            {
                if (string.IsNullOrEmpty(reg.Pp))
                {
                    return false;
                }

                var output = (from claim in _DatabaseContext.Register1
                              where claim.Pp == reg.Pp
                              select claim.Pp).Count();

                if (output > 0)
                {
                    return false;
                }
                else
                {
                    return true;
                }
            }
            catch (Exception)
            {

                throw;
            }


        }
    }
}
