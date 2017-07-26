using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DataEntity;

namespace SearchBox.Controllers
{
    public class ProductController : ApiController
    {
        DBTESTContext db = new DBTESTContext();
        // GET: api/Product
       [Route("api/product/get_all")]
        public List<Product> Get()
        {
            return db.Products.ToList();
        }

        // GET: api/Product/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Product
        [HttpPost, Route("api/product/add")]
        [AllowAnonymous]
        public void Add([FromBody]Product request)
        {
            Product item = request;
            db.Products.Add(request);
            db.SaveChanges();
        }

        // POST: api/Product
        [HttpPost, Route("api/product/remove")]
        [AllowAnonymous]
        public string Remove([FromBody]int Id)
        {
            Product item = db.Products.Find(Id);
            if (item != null)
            {
                db.Products.Remove(item);
                db.SaveChanges();
                return "Deleted items with id " + Id.ToString();
            }else
            {
                return "Ttem's id "+ Id.ToString() + " doesn't existing in table ";
            }
           
            return "Sorry! an unknown error occured!";
        }



        // PUT: api/Product/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Product/5
        public void Delete(int id)
        {
        }
    }
}
