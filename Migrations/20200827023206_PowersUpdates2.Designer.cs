﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using ScribeQuick.Models;

namespace ScribeQuick.Migrations
{
    [DbContext(typeof(ScribeQuickContext))]
    [Migration("20200827023206_PowersUpdates2")]
    partial class PowersUpdates2
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.7")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("ScribeQuick.Models.Character", b =>
                {
                    b.Property<int>("CharacterId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<int>("Agility")
                        .HasColumnType("int");

                    b.Property<int>("Animals")
                        .HasColumnType("int");

                    b.Property<int>("Barter")
                        .HasColumnType("int");

                    b.Property<int>("Block")
                        .HasColumnType("int");

                    b.Property<int>("Charisma")
                        .HasColumnType("int");

                    b.Property<int>("Climbing")
                        .HasColumnType("int");

                    b.Property<int>("Conjuration")
                        .HasColumnType("int");

                    b.Property<int>("CraftItem")
                        .HasColumnType("int");

                    b.Property<int>("DeityId")
                        .HasColumnType("int");

                    b.Property<int>("Disguise")
                        .HasColumnType("int");

                    b.Property<int>("Dodge")
                        .HasColumnType("int");

                    b.Property<int>("Faith")
                        .HasColumnType("int");

                    b.Property<int>("GainedXP")
                        .HasColumnType("int");

                    b.Property<int>("Healing")
                        .HasColumnType("int");

                    b.Property<int>("Intelligence")
                        .HasColumnType("int");

                    b.Property<int>("Intimidation")
                        .HasColumnType("int");

                    b.Property<int>("Invocation")
                        .HasColumnType("int");

                    b.Property<int>("Knowledge")
                        .HasColumnType("int");

                    b.Property<int>("Level")
                        .HasColumnType("int");

                    b.Property<int>("MeleeProficiency")
                        .HasColumnType("int");

                    b.Property<int>("MeleeWeapons")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<int>("Perception")
                        .HasColumnType("int");

                    b.Property<int>("Persuation")
                        .HasColumnType("int");

                    b.Property<int>("RangedProficiency")
                        .HasColumnType("int");

                    b.Property<int>("RangedWeapons")
                        .HasColumnType("int");

                    b.Property<int>("Resilience")
                        .HasColumnType("int");

                    b.Property<int>("RoleId")
                        .HasColumnType("int");

                    b.Property<int>("Seduction")
                        .HasColumnType("int");

                    b.Property<int>("SilverShekels")
                        .HasColumnType("int");

                    b.Property<int>("SocialPosturing")
                        .HasColumnType("int");

                    b.Property<int>("Sorcery")
                        .HasColumnType("int");

                    b.Property<int>("Speed")
                        .HasColumnType("int");

                    b.Property<int>("SpentXP")
                        .HasColumnType("int");

                    b.Property<int>("Stealth")
                        .HasColumnType("int");

                    b.Property<int>("Strength")
                        .HasColumnType("int");

                    b.Property<int>("Survival")
                        .HasColumnType("int");

                    b.Property<int>("Traps")
                        .HasColumnType("int");

                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.Property<int>("Wisdom")
                        .HasColumnType("int");

                    b.Property<int>("Wrestle")
                        .HasColumnType("int");

                    b.HasKey("CharacterId");

                    b.HasIndex("DeityId");

                    b.HasIndex("RoleId");

                    b.HasIndex("UserId");

                    b.ToTable("Characters");
                });

            modelBuilder.Entity("ScribeQuick.Models.CharacterPower", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<int>("CharacterId")
                        .HasColumnType("int");

                    b.Property<int>("CurrentLevel")
                        .HasColumnType("int");

                    b.Property<int>("PowerId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("CharacterId");

                    b.HasIndex("PowerId");

                    b.ToTable("CharacterPowers");
                });

            modelBuilder.Entity("ScribeQuick.Models.Deity", b =>
                {
                    b.Property<int>("DeityId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("About")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("CriticalPowerDesc")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("CriticalPowerName")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("Name")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("PassivePowerDesc")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("PassivePowerName")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("PreferredSacrifice")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.HasKey("DeityId");

                    b.ToTable("Deities");
                });

            modelBuilder.Entity("ScribeQuick.Models.Power", b =>
                {
                    b.Property<int>("PowerId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("Challenge")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<int>("DeityId")
                        .HasColumnType("int");

                    b.Property<string>("Description")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("Duration")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<bool>("IsDivine")
                        .HasColumnType("tinyint(1)");

                    b.Property<int>("MaximumLevel")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<int>("RoleId")
                        .HasColumnType("int");

                    b.Property<string>("SkillTreeName")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<int>("Tier")
                        .HasColumnType("int");

                    b.Property<string>("Type")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.HasKey("PowerId");

                    b.HasIndex("DeityId");

                    b.HasIndex("RoleId");

                    b.ToTable("Powers");
                });

            modelBuilder.Entity("ScribeQuick.Models.Role", b =>
                {
                    b.Property<int>("RoleId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("About")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("Name")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.HasKey("RoleId");

                    b.ToTable("Roles");
                });

            modelBuilder.Entity("ScribeQuick.Models.User", b =>
                {
                    b.Property<int>("UserId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.HasKey("UserId");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("ScribeQuick.Models.Character", b =>
                {
                    b.HasOne("ScribeQuick.Models.Deity", "Deity")
                        .WithMany("Champions")
                        .HasForeignKey("DeityId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("ScribeQuick.Models.Role", "Role")
                        .WithMany("Practitioners")
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("ScribeQuick.Models.User", "Creator")
                        .WithMany("CreatedCharacters")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("ScribeQuick.Models.CharacterPower", b =>
                {
                    b.HasOne("ScribeQuick.Models.Character", "Character")
                        .WithMany("ChosenPowers")
                        .HasForeignKey("CharacterId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("ScribeQuick.Models.Power", "Power")
                        .WithMany("ChosenBy")
                        .HasForeignKey("PowerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("ScribeQuick.Models.Power", b =>
                {
                    b.HasOne("ScribeQuick.Models.Deity", "Deity")
                        .WithMany("Powers")
                        .HasForeignKey("DeityId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("ScribeQuick.Models.Role", "Role")
                        .WithMany("Powers")
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}