using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ScribeQuick.Migrations
{
    public partial class CharacterSheetDbSet : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Deity",
                columns: table => new
                {
                    DeityId = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true),
                    About = table.Column<string>(nullable: true),
                    PassivePowerName = table.Column<string>(nullable: true),
                    PassivePowerDesc = table.Column<string>(nullable: true),
                    CriticalPowerName = table.Column<string>(nullable: true),
                    CriticalPowerDesc = table.Column<string>(nullable: true),
                    PreferredSacrifice = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Deity", x => x.DeityId);
                });

            migrationBuilder.CreateTable(
                name: "Role",
                columns: table => new
                {
                    RoleId = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true),
                    About = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Role", x => x.RoleId);
                });

            migrationBuilder.CreateTable(
                name: "Characters",
                columns: table => new
                {
                    CharacterId = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: false),
                    Level = table.Column<int>(nullable: false),
                    GainedXP = table.Column<int>(nullable: false),
                    SpentXP = table.Column<int>(nullable: false),
                    SilverShekels = table.Column<int>(nullable: false),
                    MeleeProficiency = table.Column<int>(nullable: false),
                    RangedProficiency = table.Column<int>(nullable: false),
                    Speed = table.Column<int>(nullable: false),
                    Agility = table.Column<int>(nullable: false),
                    Strength = table.Column<int>(nullable: false),
                    Resilience = table.Column<int>(nullable: false),
                    Intelligence = table.Column<int>(nullable: false),
                    Wisdom = table.Column<int>(nullable: false),
                    Charisma = table.Column<int>(nullable: false),
                    Faith = table.Column<int>(nullable: false),
                    MeleeWeapons = table.Column<int>(nullable: false),
                    RangedWeapons = table.Column<int>(nullable: false),
                    Traps = table.Column<int>(nullable: false),
                    Block = table.Column<int>(nullable: false),
                    Dodge = table.Column<int>(nullable: false),
                    Stealth = table.Column<int>(nullable: false),
                    Climbing = table.Column<int>(nullable: false),
                    Wrestle = table.Column<int>(nullable: false),
                    Survival = table.Column<int>(nullable: false),
                    Conjuration = table.Column<int>(nullable: false),
                    CraftItem = table.Column<int>(nullable: false),
                    Knowledge = table.Column<int>(nullable: false),
                    Sorcery = table.Column<int>(nullable: false),
                    Perception = table.Column<int>(nullable: false),
                    Persuation = table.Column<int>(nullable: false),
                    Seduction = table.Column<int>(nullable: false),
                    Intimidation = table.Column<int>(nullable: false),
                    Disguise = table.Column<int>(nullable: false),
                    Animals = table.Column<int>(nullable: false),
                    Barter = table.Column<int>(nullable: false),
                    SocialPosturing = table.Column<int>(nullable: false),
                    Invocation = table.Column<int>(nullable: false),
                    Healing = table.Column<int>(nullable: false),
                    UserId = table.Column<int>(nullable: false),
                    RoleId = table.Column<int>(nullable: false),
                    DeityId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Characters", x => x.CharacterId);
                    table.ForeignKey(
                        name: "FK_Characters_Deity_DeityId",
                        column: x => x.DeityId,
                        principalTable: "Deity",
                        principalColumn: "DeityId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Characters_Role_RoleId",
                        column: x => x.RoleId,
                        principalTable: "Role",
                        principalColumn: "RoleId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Characters_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Power",
                columns: table => new
                {
                    PowerId = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    IsDivine = table.Column<bool>(nullable: false),
                    SkillTreeName = table.Column<string>(nullable: true),
                    Tier = table.Column<int>(nullable: false),
                    MaximumLevel = table.Column<int>(nullable: false),
                    RoleId = table.Column<int>(nullable: false),
                    DeityId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Power", x => x.PowerId);
                    table.ForeignKey(
                        name: "FK_Power_Deity_DeityId",
                        column: x => x.DeityId,
                        principalTable: "Deity",
                        principalColumn: "DeityId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Power_Role_RoleId",
                        column: x => x.RoleId,
                        principalTable: "Role",
                        principalColumn: "RoleId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CharacterPower",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    CurrentLevel = table.Column<int>(nullable: false),
                    CharacterId = table.Column<int>(nullable: false),
                    PowerId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CharacterPower", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CharacterPower_Characters_CharacterId",
                        column: x => x.CharacterId,
                        principalTable: "Characters",
                        principalColumn: "CharacterId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CharacterPower_Power_PowerId",
                        column: x => x.PowerId,
                        principalTable: "Power",
                        principalColumn: "PowerId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CharacterPower_CharacterId",
                table: "CharacterPower",
                column: "CharacterId");

            migrationBuilder.CreateIndex(
                name: "IX_CharacterPower_PowerId",
                table: "CharacterPower",
                column: "PowerId");

            migrationBuilder.CreateIndex(
                name: "IX_Characters_DeityId",
                table: "Characters",
                column: "DeityId");

            migrationBuilder.CreateIndex(
                name: "IX_Characters_RoleId",
                table: "Characters",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "IX_Characters_UserId",
                table: "Characters",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Power_DeityId",
                table: "Power",
                column: "DeityId");

            migrationBuilder.CreateIndex(
                name: "IX_Power_RoleId",
                table: "Power",
                column: "RoleId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CharacterPower");

            migrationBuilder.DropTable(
                name: "Characters");

            migrationBuilder.DropTable(
                name: "Power");

            migrationBuilder.DropTable(
                name: "Deity");

            migrationBuilder.DropTable(
                name: "Role");
        }
    }
}
