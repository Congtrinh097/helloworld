using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace DataEntity.Model
{
    public partial class User
    {
        [Key]
        public int Id { get; set; }

        public string username { get; set; }

        public string password { get; set; }

        public int role { get; set; }

        public DateTime createDate { get; set; }

      

    }
}
