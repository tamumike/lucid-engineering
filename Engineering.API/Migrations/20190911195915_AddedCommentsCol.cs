﻿using Microsoft.EntityFrameworkCore.Migrations;

namespace Engineering.API.Migrations
{
    public partial class AddedCommentsCol : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Comments",
                table: "Requests",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Comments",
                table: "Requests");
        }
    }
}
