using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DataEntity.Model;
using DataEntity;

namespace SearchBox.Controllers
{
    public class CategoryController : ApiController
    {
        DBTESTContext db = new DBTESTContext();
        // GET: api/cate
        [Route("api/cate/get_all")]
        public List<Category> Get()
        {
            return db.Categories.ToList();
        }

        // POST: api/cate
        [HttpPost, Route("api/cate/add")]
        [AllowAnonymous]
        public void Add([FromBody]Category request)
        {

            db.Categories.Add(request);
            db.SaveChanges();
        }


        // POST: api/cate/update
        [HttpPost, Route("api/cate/update")]
        [AllowAnonymous]
        public string update([FromBody]Category request)
        {

            Category item = db.Categories.Where(x => x.Id == request.Id).FirstOrDefault();
            if (item != null)
            {
                item.name = request.name;
                item.parent_id = request.parent_id;
                item.description = request.description;

                db.SaveChanges();
                return "Update successfull";
            }
            else
            {
                return "Not found item";
            }
        }

        // POST: api/cate
        [HttpPost, Route("api/cate/remove")]
        [AllowAnonymous]
        public string Remove([FromBody]int Id)
        {
            Category item = db.Categories.Find(Id);
            if (item != null)
            {
                db.Categories.Remove(item);
                db.SaveChanges();
                return "Deleted items with id " + Id.ToString();
            }
            else
            {
                return "Ttem's id " + Id.ToString() + " doesn't existing in table ";
            }

            return "Sorry! an unknown error occured!";
        }


    }
}
