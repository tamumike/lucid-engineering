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
                    ESR = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    DateInitiated = table.Column<DateTime>(nullable: false),
                    RequestedDateForCompletion = table.Column<DateTime>(nullable: false),
                    InitiatedBy = table.Column<string>(nullable: false),
                    Group = table.Column<string>(nullable: false),
                    LocationOfProject = table.Column<string>(nullable: false),
                    Description = table.Column<string>(nullable: false),
                    Approved = table.Column<bool>(nullable: false, defaultValue: false),
                    EngineerAssigned = table.Column<string>(nullable: false),
                    DateCompleted = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Requests", x => x.ESR);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Requests");
        }
    }
}
