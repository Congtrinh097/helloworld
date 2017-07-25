namespace DataEntity.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class trinh_000001 : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Products", "price", c => c.Single(nullable: false));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Products", "price", c => c.String());
        }
    }
}
