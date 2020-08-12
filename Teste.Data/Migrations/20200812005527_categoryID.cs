using Microsoft.EntityFrameworkCore.Migrations;

namespace Teste.Data.Migrations
{
    public partial class categoryID : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_SubCategoria_Category_categoryid",
                table: "SubCategoria");

            migrationBuilder.AlterColumn<int>(
                name: "categoryid",
                table: "SubCategoria",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_SubCategoria_Category_categoryid",
                table: "SubCategoria",
                column: "categoryid",
                principalTable: "Category",
                principalColumn: "id",
                onDelete: ReferentialAction.NoAction);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_SubCategoria_Category_categoryid",
                table: "SubCategoria");

            migrationBuilder.AlterColumn<int>(
                name: "categoryid",
                table: "SubCategoria",
                type: "int",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddForeignKey(
                name: "FK_SubCategoria_Category_categoryid",
                table: "SubCategoria",
                column: "categoryid",
                principalTable: "Category",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
