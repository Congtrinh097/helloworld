using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace DataEntity.Model
{
    public partial class Category
    {
        [Key]
        public int Id { get; set; }

        public string name { get; set; }

        public int parent_id { get; set; }

        public string description { get; set; }
    }
}
