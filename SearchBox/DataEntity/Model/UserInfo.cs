using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DataEntity.Model
{
    public partial class UserInfo
    {   
        [Key]
        public int Id { get; set; }

        public int userId { get; set; }

        public string email { get; set; }

        public string fullName { get; set; }

        public string image { get; set; }

        public string phone { get; set; }

        public string address { get; set; }

        public int age { get; set; }


    }
}
