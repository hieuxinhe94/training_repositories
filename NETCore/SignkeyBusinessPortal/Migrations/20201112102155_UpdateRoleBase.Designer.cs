﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using SK.Data.Database;

namespace SignkeyBusinessPortal.Migrations
{
    [DbContext(typeof(ApplicationContext))]
    [Migration("20201112102155_UpdateRoleBase")]
    partial class UpdateRoleBase
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.9")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("SK.Entity.Common.SettingKeyVal", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<DateTime>("DateCreated")
                        .HasColumnType("datetime");

                    b.HasKey("Id");

                    b.ToTable("SettingKeyVal");
                });

            modelBuilder.Entity("SK.Entity.Common.SkUser", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<DateTime>("DateCreated")
                        .HasColumnType("datetime");

                    b.Property<string>("Email")
                        .HasColumnType("text");

                    b.Property<bool>("EmailVerified")
                        .HasColumnType("tinyint(1)");

                    b.Property<string>("FullName")
                        .HasColumnType("text");

                    b.Property<string>("Password")
                        .HasColumnType("text");

                    b.Property<string>("PaypalEmail")
                        .HasColumnType("text");

                    b.Property<bool>("PaypalEmailVerified")
                        .HasColumnType("tinyint(1)");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("text");

                    b.Property<string>("ReferralCode")
                        .HasColumnType("text");

                    b.Property<string>("ReferralLink")
                        .HasColumnType("text");

                    b.Property<int>("Roles")
                        .HasColumnType("int");

                    b.Property<string>("Username")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("SkUser");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            DateCreated = new DateTime(2020, 11, 12, 17, 21, 55, 367, DateTimeKind.Local).AddTicks(7658),
                            Email = "admin@email.com",
                            EmailVerified = false,
                            FullName = "Admin",
                            Password = "123456",
                            PaypalEmailVerified = false,
                            PhoneNumber = "12345678",
                            Roles = 0,
                            Username = "admin@email.com"
                        });
                });

            modelBuilder.Entity("SK.Entity.Common.TransactionsLogs", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<DateTime>("CompletedDate")
                        .HasColumnType("datetime");

                    b.Property<DateTime>("DateCreated")
                        .HasColumnType("datetime");

                    b.Property<DateTime>("ExecuteDate")
                        .HasColumnType("datetime");

                    b.Property<string>("Info")
                        .HasColumnType("text");

                    b.Property<string>("Message")
                        .HasColumnType("text");

                    b.Property<int>("Status")
                        .HasColumnType("int");

                    b.Property<string>("TransactionId")
                        .HasColumnType("text");

                    b.Property<int>("Type")
                        .HasColumnType("int");

                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("TransactionsLogs");
                });
#pragma warning restore 612, 618
        }
    }
}
