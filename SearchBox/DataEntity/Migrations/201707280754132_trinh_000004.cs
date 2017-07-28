namespace DataEntity.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class trinh_000004 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.UserInfoes", "fullName", c => c.String());
            AddColumn("dbo.UserInfoes", "image", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.UserInfoes", "image");
            DropColumn("dbo.UserInfoes", "fullName");
        }
    }
}
