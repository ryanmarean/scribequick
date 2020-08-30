using Microsoft.EntityFrameworkCore.Migrations;

namespace ScribeQuick.Migrations
{
    public partial class CharacterModelsAddlSkills : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Divination",
                table: "Characters",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Leadership",
                table: "Characters",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Willpower",
                table: "Characters",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Divination",
                table: "Characters");

            migrationBuilder.DropColumn(
                name: "Leadership",
                table: "Characters");

            migrationBuilder.DropColumn(
                name: "Willpower",
                table: "Characters");
        }
    }
}
