using Microsoft.EntityFrameworkCore.Migrations;

namespace Teste.Data.Migrations
{
    public partial class subCategoriaID : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Product_Category_categoryid",
                table: "Product");

            migrationBuilder.DropForeignKey(
                name: "FK_Product_SubCategoria_subCategoriaid",
                table: "Product");

            migrationBuilder.AlterColumn<int>(
                name: "subCategoriaid",
                table: "Product",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "categoryid",
                table: "Product",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Product_Category_categoryid",
                table: "Product",
                column: "categoryid",
                principalTable: "Category",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Product_SubCategoria_subCategoriaid",
                table: "Product",
                column: "subCategoriaid",
                principalTable: "SubCategoria",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Product_Category_categoryid",
                table: "Product");

            migrationBuilder.DropForeignKey(
                name: "FK_Product_SubCategoria_subCategoriaid",
                table: "Product");

            migrationBuilder.AlterColumn<int>(
                name: "subCategoriaid",
                table: "Product",
                type: "int",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<int>(
                name: "categoryid",
                table: "Product",
                type: "int",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddForeignKey(
                name: "FK_Product_Category_categoryid",
                table: "Product",
                column: "categoryid",
                principalTable: "Category",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Product_SubCategoria_subCategoriaid",
                table: "Product",
                column: "subCategoriaid",
                principalTable: "SubCategoria",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
