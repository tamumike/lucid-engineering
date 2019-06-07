using Microsoft.EntityFrameworkCore.Migrations;

namespace Engineering.API.Migrations
{
    public partial class DeptAndPriorityFields : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Department",
                table: "Requests",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Priority",
                table: "Requests",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Department",
                table: "Requests");

            migrationBuilder.DropColumn(
                name: "Priority",
                table: "Requests");
        }
    }
}
