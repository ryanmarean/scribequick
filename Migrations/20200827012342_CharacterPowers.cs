using Microsoft.EntityFrameworkCore.Migrations;

namespace ScribeQuick.Migrations
{
    public partial class CharacterPowers : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CharacterPower_Characters_CharacterId",
                table: "CharacterPower");

            migrationBuilder.DropForeignKey(
                name: "FK_CharacterPower_Powers_PowerId",
                table: "CharacterPower");

            migrationBuilder.DropPrimaryKey(
                name: "PK_CharacterPower",
                table: "CharacterPower");

            migrationBuilder.RenameTable(
                name: "CharacterPower",
                newName: "CharacterPowers");

            migrationBuilder.RenameIndex(
                name: "IX_CharacterPower_PowerId",
                table: "CharacterPowers",
                newName: "IX_CharacterPowers_PowerId");

            migrationBuilder.RenameIndex(
                name: "IX_CharacterPower_CharacterId",
                table: "CharacterPowers",
                newName: "IX_CharacterPowers_CharacterId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_CharacterPowers",
                table: "CharacterPowers",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_CharacterPowers_Characters_CharacterId",
                table: "CharacterPowers",
                column: "CharacterId",
                principalTable: "Characters",
                principalColumn: "CharacterId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_CharacterPowers_Powers_PowerId",
                table: "CharacterPowers",
                column: "PowerId",
                principalTable: "Powers",
                principalColumn: "PowerId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CharacterPowers_Characters_CharacterId",
                table: "CharacterPowers");

            migrationBuilder.DropForeignKey(
                name: "FK_CharacterPowers_Powers_PowerId",
                table: "CharacterPowers");

            migrationBuilder.DropPrimaryKey(
                name: "PK_CharacterPowers",
                table: "CharacterPowers");

            migrationBuilder.RenameTable(
                name: "CharacterPowers",
                newName: "CharacterPower");

            migrationBuilder.RenameIndex(
                name: "IX_CharacterPowers_PowerId",
                table: "CharacterPower",
                newName: "IX_CharacterPower_PowerId");

            migrationBuilder.RenameIndex(
                name: "IX_CharacterPowers_CharacterId",
                table: "CharacterPower",
                newName: "IX_CharacterPower_CharacterId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_CharacterPower",
                table: "CharacterPower",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_CharacterPower_Characters_CharacterId",
                table: "CharacterPower",
                column: "CharacterId",
                principalTable: "Characters",
                principalColumn: "CharacterId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_CharacterPower_Powers_PowerId",
                table: "CharacterPower",
                column: "PowerId",
                principalTable: "Powers",
                principalColumn: "PowerId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
