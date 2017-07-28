namespace DataEntity.Model
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Product
    {
        [Key]
        public int Id { get; set; }

        public int cate_id { get; set; }

        public float price { get; set; }

        public bool stocked { get; set; }

        public string image { get; set; }

        public string name { get; set; }
        
        public string description { get; set; }

        
    }
}
