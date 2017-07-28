namespace DataEntity.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class trinh_000002 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Categories",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        name = c.String(),
                        parent_id = c.Int(nullable: false),
                        description = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.ProductImages",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        productId = c.Int(nullable: false),
                        image = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Users",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        username = c.String(),
                        password = c.Single(nullable: false),
                        role = c.Boolean(nullable: false),
                        createDate = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.UserInfoes",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        userId = c.Int(nullable: false),
                        email = c.String(),
                        phone = c.String(),
                        address = c.String(),
                        age = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.UserTokens",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        userId = c.Int(nullable: false),
                        token = c.String(),
                        lastLoginDated = c.DateTime(nullable: false),
                        expiredDated = c.DateTime(nullable: false),
                        isRememberMe = c.Boolean(),
                    })
                .PrimaryKey(t => t.Id);
            
            AddColumn("dbo.Products", "cate_id", c => c.Int(nullable: false));
            AddColumn("dbo.Products", "image", c => c.String());
            AddColumn("dbo.Products", "description", c => c.String());
            DropColumn("dbo.Products", "category");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Products", "category", c => c.String());
            DropColumn("dbo.Products", "description");
            DropColumn("dbo.Products", "image");
            DropColumn("dbo.Products", "cate_id");
            DropTable("dbo.UserTokens");
            DropTable("dbo.UserInfoes");
            DropTable("dbo.Users");
            DropTable("dbo.ProductImages");
            DropTable("dbo.Categories");
        }
    }
}
