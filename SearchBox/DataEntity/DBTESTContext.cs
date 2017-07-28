namespace DataEntity
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;
    using DataEntity.Model;



    public partial class DBTESTContext : DbContext
    {
       
        public DBTESTContext()
            : base("name=DBTESTContext")
        {
        }

        public virtual DbSet<Product> Products { get; set; }
        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<UserInfo> UserInfos { get; set; }
        public virtual DbSet<UserToken> UserTokens { get; set; }
        public virtual DbSet<Category> Categories { get; set; }
        public virtual DbSet<ProductImage> ProductImages { get; set; }


        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
         

        }
    }
}
