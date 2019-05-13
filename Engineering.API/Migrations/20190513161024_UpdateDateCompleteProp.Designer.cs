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
    [Migration("20190513161024_UpdateDateCompleteProp")]
    partial class UpdateDateCompleteProp
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
                    b.Property<int>("ESR")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("Approved")
                        .ValueGeneratedOnAdd()
                        .HasDefaultValue(false);

                    b.Property<DateTime>("DateCompleted");

                    b.Property<DateTime>("DateInitiated");

                    b.Property<string>("Description")
                        .IsRequired();

                    b.Property<string>("EngineerAssigned")
                        .IsRequired();

                    b.Property<string>("Group")
                        .IsRequired();

                    b.Property<string>("InitiatedBy")
                        .IsRequired();

                    b.Property<string>("LocationOfProject")
                        .IsRequired();

                    b.Property<DateTime>("RequestedDateForCompletion");

                    b.HasKey("ESR");

                    b.ToTable("Requests");
                });
#pragma warning restore 612, 618
        }
    }
}
