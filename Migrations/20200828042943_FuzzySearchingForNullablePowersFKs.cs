using Microsoft.EntityFrameworkCore.Migrations;

namespace ScribeQuick.Migrations
{
    public partial class FuzzySearchingForNullablePowersFKs : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Powers_Deities_DeityId",
                table: "Powers");

            migrationBuilder.DropForeignKey(
                name: "FK_Powers_Roles_RoleId",
                table: "Powers");

            migrationBuilder.AlterColumn<int>(
                name: "RoleId",
                table: "Powers",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "DeityId",
                table: "Powers",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_Powers_Deities_DeityId",
                table: "Powers",
                column: "DeityId",
                principalTable: "Deities",
                principalColumn: "DeityId",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Powers_Roles_RoleId",
                table: "Powers",
                column: "RoleId",
                principalTable: "Roles",
                principalColumn: "RoleId",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Powers_Deities_DeityId",
                table: "Powers");

            migrationBuilder.DropForeignKey(
                name: "FK_Powers_Roles_RoleId",
                table: "Powers");

            migrationBuilder.AlterColumn<int>(
                name: "RoleId",
                table: "Powers",
                type: "int",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "DeityId",
                table: "Powers",
                type: "int",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

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
    }
}
