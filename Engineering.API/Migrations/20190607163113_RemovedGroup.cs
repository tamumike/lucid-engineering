using Microsoft.EntityFrameworkCore.Migrations;

namespace Engineering.API.Migrations
{
    public partial class RemovedGroup : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Group",
                table: "Requests");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Group",
                table: "Requests",
                nullable: true);
        }
    }
}
