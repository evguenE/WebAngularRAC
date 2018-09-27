using Microsoft.AspNetCore.Mvc;
using WebAngularRAC.Models;
using WebAngularRAC.DBcontext;
using System;
using System.Linq;



namespace WebAngularRAC.Controllers
{
    [Route("api/[controller]")]
    public class ClaimsController : Controller
    {

        DatabaseContext _DatabaseContext;
        public ClaimsController(DatabaseContext DatabaseContext)
        {
            _DatabaseContext = DatabaseContext;
        }
        // GET: api/values
        [HttpGet]
        public Register1[] Get()
        {
            try
            {
                var ListofClaims = _DatabaseContext.Register1.ToList();               
                return ListofClaims.ToArray();
            }
            catch (Exception)
            {
                throw;
            }
        }

        
        // GET api/values/5
        [HttpGet("{id}")]
        public Register1 Get(string id)
        {
            try
            {
                var output = (from Claims in _DatabaseContext.Register1
                              where Claims.Pp == id
                              select Claims).SingleOrDefault();

                return output;
            }
            catch (Exception)
            {
                throw;
            }
        }

        //Insert
        // POST api/values
        [HttpPost]
        public bool Post([FromBody]Register1 reg)
        {
            try
            {
                var output = (from claims in _DatabaseContext.Register1
                              where claims.Pp == reg.Pp
                              select claims.Pp).Count();

                if (output > 0)
                {
                    return false;
                }
                else
                {                  
                    
                    _DatabaseContext.Add(reg);
                    _DatabaseContext.SaveChanges();
                    return true;
                }
            }
            catch (Exception)
            {

                throw;
            }
        }

        //Update
        // PUT api/values/5
        [HttpPut("{id}")]
        public bool Put(string id, [FromBody]Register1 reg)
        {
            try
            {
                if (string.IsNullOrEmpty(id))
                {
                    return false;
                }

                if (reg == null)
                {
                    return false;
                }

                var claimupdate = new Register1
                {
                    Pp = reg.Pp,
                    Mp = reg.Mp,
                    Place = reg.Place,
                    Garza = reg.Garza,
                    DatePost = reg.DatePost,
                    Result = reg.Result,
                    DateAuction = reg.DateAuction,
                    Region = reg.Region,
                    Player = reg.Player,
                    Client = reg.Client,
                    Manager = reg.Manager,
                    FirstPrice = reg.FirstPrice,
                    Sum = reg.Sum,
                    Return = reg.Return,
                    SumPrize = reg.SumPrize,
                    Percent = reg.Percent,
                    Status = reg.Status
                };

                var db = _DatabaseContext;
                db.Register1.Attach(claimupdate);
                //db.Entry(claimupdate).Property(x => x.Pp).IsModified = true;
                db.Entry(claimupdate).Property(x => x.Mp).IsModified = true;
                db.Entry(claimupdate).Property(x => x.Place).IsModified = true;
                db.Entry(claimupdate).Property(x => x.Garza).IsModified = true;
                db.Entry(claimupdate).Property(x => x.DatePost).IsModified = true;
                db.Entry(claimupdate).Property(x => x.Result).IsModified = true;
                db.Entry(claimupdate).Property(x => x.DateAuction).IsModified = true;
                db.Entry(claimupdate).Property(x => x.Region).IsModified = true;
                db.Entry(claimupdate).Property(x => x.Player).IsModified = true;
                db.Entry(claimupdate).Property(x => x.Client).IsModified = true;
                db.Entry(claimupdate).Property(x => x.Manager).IsModified = true;
                db.Entry(claimupdate).Property(x => x.FirstPrice).IsModified = true;
                db.Entry(claimupdate).Property(x => x.Sum).IsModified = true;
                db.Entry(claimupdate).Property(x => x.Return).IsModified = true;
                db.Entry(claimupdate).Property(x => x.SumPrize).IsModified = true;
                db.Entry(claimupdate).Property(x => x.Percent).IsModified = true;
                db.Entry(claimupdate).Property(x => x.Status).IsModified = true;
                db.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                throw;
            }

        }


    }
}
