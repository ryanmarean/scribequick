using Microsoft.EntityFrameworkCore.Migrations;

namespace ScribeQuick.Migrations
{
    public partial class Deities : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Characters_Deity_DeityId",
                table: "Characters");

            migrationBuilder.DropForeignKey(
                name: "FK_Power_Deity_DeityId",
                table: "Power");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Deity",
                table: "Deity");

            migrationBuilder.RenameTable(
                name: "Deity",
                newName: "Deities");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Deities",
                table: "Deities",
                column: "DeityId");

            migrationBuilder.AddForeignKey(
                name: "FK_Characters_Deities_DeityId",
                table: "Characters",
                column: "DeityId",
                principalTable: "Deities",
                principalColumn: "DeityId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Power_Deities_DeityId",
                table: "Power",
                column: "DeityId",
                principalTable: "Deities",
                principalColumn: "DeityId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Characters_Deities_DeityId",
                table: "Characters");

            migrationBuilder.DropForeignKey(
                name: "FK_Power_Deities_DeityId",
                table: "Power");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Deities",
                table: "Deities");

            migrationBuilder.RenameTable(
                name: "Deities",
                newName: "Deity");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Deity",
                table: "Deity",
                column: "DeityId");

            migrationBuilder.AddForeignKey(
                name: "FK_Characters_Deity_DeityId",
                table: "Characters",
                column: "DeityId",
                principalTable: "Deity",
                principalColumn: "DeityId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Power_Deity_DeityId",
                table: "Power",
                column: "DeityId",
                principalTable: "Deity",
                principalColumn: "DeityId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
