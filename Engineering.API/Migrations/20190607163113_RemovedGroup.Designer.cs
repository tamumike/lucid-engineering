﻿// <auto-generated />
using System;
using Engineering.API.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Engineering.API.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20190607163113_RemovedGroup")]
    partial class RemovedGroup
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.2-servicing-10034")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Engineering.API.Models.Request", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("Approved")
                        .ValueGeneratedOnAdd()
                        .HasDefaultValue(false);

                    b.Property<DateTime?>("DateCompleted")
                        .ValueGeneratedOnAdd()
                        .HasDefaultValue(null);

                    b.Property<DateTime>("DateInitiated");

                    b.Property<string>("Department");

                    b.Property<string>("Description");

                    b.Property<string>("ESR");

                    b.Property<string>("EngineerAssigned")
                        .ValueGeneratedOnAdd()
                        .HasDefaultValue(null);

                    b.Property<string>("InitiatedBy");

                    b.Property<string>("LocationOfProject");

                    b.Property<int>("Priority");

                    b.Property<DateTime>("RequestedDateForCompletion");

                    b.Property<string>("Status");

                    b.HasKey("Id");

                    b.ToTable("Requests");
                });
#pragma warning restore 612, 618
        }
    }
}
