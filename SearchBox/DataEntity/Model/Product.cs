namespace DataEntity
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Product
    {
        public int Id { get; set; }

        public string category { get; set; }

        public float price { get; set; }

        public bool stocked { get; set; }

        public string name { get; set; }
    }
}
