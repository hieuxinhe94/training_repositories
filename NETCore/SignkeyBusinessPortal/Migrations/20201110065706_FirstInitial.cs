using System;
using Microsoft.EntityFrameworkCore.Migrations;
using MySql.Data.EntityFrameworkCore.Metadata;

namespace SignkeyBusinessPortal.Migrations
{
    public partial class FirstInitial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "SettingKeyVal",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    DateCreated = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SettingKeyVal", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "SkUser",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    DateCreated = table.Column<DateTime>(nullable: false),
                    FullName = table.Column<string>(nullable: true),
                    Username = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    PaypalEmail = table.Column<string>(nullable: true),
                    PhoneNumber = table.Column<string>(nullable: true),
                    ReferralCode = table.Column<string>(nullable: true),
                    ReferralLink = table.Column<string>(nullable: true),
                    Password = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SkUser", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "SkUser",
                columns: new[] { "Id", "DateCreated", "Email", "FullName", "Password", "PaypalEmail", "PhoneNumber", "ReferralCode", "ReferralLink", "Username" },
                values: new object[] { 1, new DateTime(2020, 11, 10, 13, 57, 6, 579, DateTimeKind.Local).AddTicks(4703), "admin@email.com", "Admin", "123456", null, "12345678", null, null, "admin@email.com" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "SettingKeyVal");

            migrationBuilder.DropTable(
                name: "SkUser");
        }
    }
}
