using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace DataEntity.Model
{
    public partial class ProductImage
    {
        [Key]
        public int Id { get; set; }
        public int productId { get; set; }
        public string image { get; set; }
    }
}
