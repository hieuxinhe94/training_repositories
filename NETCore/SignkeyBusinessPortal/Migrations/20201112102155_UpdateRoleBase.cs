using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SignkeyBusinessPortal.Migrations
{
    public partial class UpdateRoleBase : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Roles",
                table: "SkUser",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.UpdateData(
                table: "SkUser",
                keyColumn: "Id",
                keyValue: 1,
                column: "DateCreated",
                value: new DateTime(2020, 11, 12, 17, 21, 55, 367, DateTimeKind.Local).AddTicks(7658));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Roles",
                table: "SkUser");

            migrationBuilder.UpdateData(
                table: "SkUser",
                keyColumn: "Id",
                keyValue: 1,
                column: "DateCreated",
                value: new DateTime(2020, 11, 12, 14, 22, 8, 549, DateTimeKind.Local).AddTicks(9021));
        }
    }
}
