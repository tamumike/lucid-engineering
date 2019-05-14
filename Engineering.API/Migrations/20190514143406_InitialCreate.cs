using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Engineering.API.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Requests",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ESR = table.Column<string>(nullable: true),
                    DateInitiated = table.Column<DateTime>(nullable: false),
                    RequestedDateForCompletion = table.Column<DateTime>(nullable: false),
                    InitiatedBy = table.Column<string>(nullable: true),
                    Group = table.Column<string>(nullable: true),
                    LocationOfProject = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    Approved = table.Column<bool>(nullable: false, defaultValue: false),
                    EngineerAssigned = table.Column<string>(nullable: true),
                    DateCompleted = table.Column<DateTime>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Requests", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Requests");
        }
    }
}
