using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DataEntity.Model
{
    public class UserToken
    {
        [Key]
        public int Id { get; set; }
        public int userId { get; set; }
        public string token { get; set; }
        public DateTime lastLoginDated { get; set; }
        public DateTime expiredDated { get; set; }
        public bool? isRememberMe { get; set; }

     
    }
}
