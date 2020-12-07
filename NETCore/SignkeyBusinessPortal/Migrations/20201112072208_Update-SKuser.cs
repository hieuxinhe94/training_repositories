using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SignkeyBusinessPortal.Migrations
{
    public partial class UpdateSKuser : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "EmailVerified",
                table: "SkUser",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "PaypalEmailVerified",
                table: "SkUser",
                nullable: false,
                defaultValue: false);

            migrationBuilder.UpdateData(
                table: "SkUser",
                keyColumn: "Id",
                keyValue: 1,
                column: "DateCreated",
                value: new DateTime(2020, 11, 12, 14, 22, 8, 549, DateTimeKind.Local).AddTicks(9021));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "EmailVerified",
                table: "SkUser");

            migrationBuilder.DropColumn(
                name: "PaypalEmailVerified",
                table: "SkUser");

            migrationBuilder.UpdateData(
                table: "SkUser",
                keyColumn: "Id",
                keyValue: 1,
                column: "DateCreated",
                value: new DateTime(2020, 11, 11, 17, 31, 40, 151, DateTimeKind.Local).AddTicks(9493));
        }
    }
}
