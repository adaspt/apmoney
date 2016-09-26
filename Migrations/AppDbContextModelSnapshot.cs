using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using ApMoney.Models;

namespace ApMoney.Migrations
{
    [DbContext(typeof(AppDbContext))]
    partial class AppDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.0.1")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("ApMoney.Models.Account", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("IsClosed");

                    b.Property<string>("Name");

                    b.Property<int>("Type");

                    b.HasKey("Id");

                    b.ToTable("Accounts");
                });

            modelBuilder.Entity("ApMoney.Models.AccountBalance", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("AccountId");

                    b.Property<decimal>("Amount");

                    b.Property<int>("Month");

                    b.Property<int>("Year");

                    b.HasKey("Id");

                    b.HasIndex("AccountId");

                    b.ToTable("AccountBalances");
                });

            modelBuilder.Entity("ApMoney.Models.Transaction", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("AccountId");

                    b.Property<decimal>("Amount");

                    b.Property<int?>("CategoryId");

                    b.Property<DateTime>("Date");

                    b.Property<string>("Note");

                    b.Property<int?>("SubcategoryId");

                    b.Property<int>("Type");

                    b.HasKey("Id");

                    b.HasIndex("AccountId");

                    b.HasIndex("CategoryId");

                    b.HasIndex("SubcategoryId");

                    b.ToTable("Transactions");
                });

            modelBuilder.Entity("ApMoney.Models.TransactionCategory", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 100);

                    b.Property<int>("Type");

                    b.HasKey("Id");

                    b.ToTable("TransactionCategories");
                });

            modelBuilder.Entity("ApMoney.Models.TransactionSubcategory", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("CategoryId");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 100);

                    b.HasKey("Id");

                    b.HasIndex("CategoryId");

                    b.ToTable("TransactionSubcategories");
                });

            modelBuilder.Entity("ApMoney.Models.AccountBalance", b =>
                {
                    b.HasOne("ApMoney.Models.Account", "Account")
                        .WithMany()
                        .HasForeignKey("AccountId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("ApMoney.Models.Transaction", b =>
                {
                    b.HasOne("ApMoney.Models.Account", "Account")
                        .WithMany()
                        .HasForeignKey("AccountId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("ApMoney.Models.TransactionCategory", "Category")
                        .WithMany()
                        .HasForeignKey("CategoryId");

                    b.HasOne("ApMoney.Models.TransactionSubcategory", "Subcategory")
                        .WithMany()
                        .HasForeignKey("SubcategoryId");
                });

            modelBuilder.Entity("ApMoney.Models.TransactionSubcategory", b =>
                {
                    b.HasOne("ApMoney.Models.TransactionCategory", "Category")
                        .WithMany("Subcategories")
                        .HasForeignKey("CategoryId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
        }
    }
}
