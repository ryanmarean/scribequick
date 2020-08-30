using Microsoft.EntityFrameworkCore.Migrations;

namespace ScribeQuick.Migrations
{
    public partial class Powers : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CharacterPower_Power_PowerId",
                table: "CharacterPower");

            migrationBuilder.DropForeignKey(
                name: "FK_Power_Deities_DeityId",
                table: "Power");

            migrationBuilder.DropForeignKey(
                name: "FK_Power_Roles_RoleId",
                table: "Power");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Power",
                table: "Power");

            migrationBuilder.RenameTable(
                name: "Power",
                newName: "Powers");

            migrationBuilder.RenameIndex(
                name: "IX_Power_RoleId",
                table: "Powers",
                newName: "IX_Powers_RoleId");

            migrationBuilder.RenameIndex(
                name: "IX_Power_DeityId",
                table: "Powers",
                newName: "IX_Powers_DeityId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Powers",
                table: "Powers",
                column: "PowerId");

            migrationBuilder.AddForeignKey(
                name: "FK_CharacterPower_Powers_PowerId",
                table: "CharacterPower",
                column: "PowerId",
                principalTable: "Powers",
                principalColumn: "PowerId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Powers_Deities_DeityId",
                table: "Powers",
                column: "DeityId",
                principalTable: "Deities",
                principalColumn: "DeityId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Powers_Roles_RoleId",
                table: "Powers",
                column: "RoleId",
                principalTable: "Roles",
                principalColumn: "RoleId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CharacterPower_Powers_PowerId",
                table: "CharacterPower");

            migrationBuilder.DropForeignKey(
                name: "FK_Powers_Deities_DeityId",
                table: "Powers");

            migrationBuilder.DropForeignKey(
                name: "FK_Powers_Roles_RoleId",
                table: "Powers");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Powers",
                table: "Powers");

            migrationBuilder.RenameTable(
                name: "Powers",
                newName: "Power");

            migrationBuilder.RenameIndex(
                name: "IX_Powers_RoleId",
                table: "Power",
                newName: "IX_Power_RoleId");

            migrationBuilder.RenameIndex(
                name: "IX_Powers_DeityId",
                table: "Power",
                newName: "IX_Power_DeityId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Power",
                table: "Power",
                column: "PowerId");

            migrationBuilder.AddForeignKey(
                name: "FK_CharacterPower_Power_PowerId",
                table: "CharacterPower",
                column: "PowerId",
                principalTable: "Power",
                principalColumn: "PowerId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Power_Deities_DeityId",
                table: "Power",
                column: "DeityId",
                principalTable: "Deities",
                principalColumn: "DeityId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Power_Roles_RoleId",
                table: "Power",
                column: "RoleId",
                principalTable: "Roles",
                principalColumn: "RoleId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
