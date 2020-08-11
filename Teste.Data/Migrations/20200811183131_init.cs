using Microsoft.EntityFrameworkCore.Migrations;

namespace Teste.Data.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Category",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    description = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Category", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "SubCategoria",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nome = table.Column<string>(nullable: true),
                    categoryid = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SubCategoria", x => x.id);
                    table.ForeignKey(
                        name: "FK_SubCategoria_Category_categoryid",
                        column: x => x.categoryid,
                        principalTable: "Category",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Product",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    title = table.Column<string>(nullable: true),
                    brand = table.Column<string>(nullable: true),
                    price = table.Column<decimal>(nullable: false),
                    sale = table.Column<bool>(nullable: false),
                    salePrice = table.Column<decimal>(nullable: false),
                    shortDescription = table.Column<string>(nullable: true),
                    categoryid = table.Column<int>(nullable: true),
                    subCategoriaid = table.Column<int>(nullable: true),
                    img = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Product", x => x.id);
                    table.ForeignKey(
                        name: "FK_Product_Category_categoryid",
                        column: x => x.categoryid,
                        principalTable: "Category",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Product_SubCategoria_subCategoriaid",
                        column: x => x.subCategoriaid,
                        principalTable: "SubCategoria",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Product_categoryid",
                table: "Product",
                column: "categoryid");

            migrationBuilder.CreateIndex(
                name: "IX_Product_subCategoriaid",
                table: "Product",
                column: "subCategoriaid");

            migrationBuilder.CreateIndex(
                name: "IX_SubCategoria_categoryid",
                table: "SubCategoria",
                column: "categoryid");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Product");

            migrationBuilder.DropTable(
                name: "SubCategoria");

            migrationBuilder.DropTable(
                name: "Category");
        }
    }
}
