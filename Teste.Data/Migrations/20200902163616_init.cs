using Microsoft.EntityFrameworkCore.Migrations;

namespace Teste.Data.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "brand",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    name = table.Column<string>(type: "varchar(30)", nullable: true),
                    Action = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_brand", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Category",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    description = table.Column<string>(type: "varchar(30)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Category", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "detail",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Garantia = table.Column<string>(nullable: true),
                    dimensoesEmbalagemA = table.Column<decimal>(type: "decimal(10,2)", nullable: false),
                    dimensoesEmbalagemL = table.Column<decimal>(type: "decimal(10,2)", nullable: false),
                    dimensoesEmbalagemP = table.Column<decimal>(type: "decimal(10,2)", nullable: false),
                    dimensoesProdutoA = table.Column<decimal>(type: "decimal(10,2)", nullable: false),
                    dimensoesProdutoL = table.Column<decimal>(type: "decimal(10,2)", nullable: false),
                    dimensoesProdutoP = table.Column<decimal>(type: "decimal(10,2)", nullable: false),
                    embalagemPeso = table.Column<decimal>(type: "decimal(10,2)", nullable: false),
                    ProdutoPeso = table.Column<decimal>(type: "decimal(10,2)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_detail", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "galleries",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    img = table.Column<string>(nullable: true),
                    subtitle = table.Column<string>(type: "varchar(30)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_galleries", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "type",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    name = table.Column<string>(type: "varchar(30)", nullable: true),
                    Action = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_type", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "SubCategoria",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nome = table.Column<string>(type: "varchar(30)", nullable: true),
                    img = table.Column<string>(nullable: true),
                    Action = table.Column<bool>(nullable: false),
                    categoryid = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SubCategoria", x => x.id);
                    table.ForeignKey(
                        name: "FK_SubCategoria_Category_categoryid",
                        column: x => x.categoryid,
                        principalTable: "Category",
                        principalColumn: "id",
                        onDelete: ReferentialAction.NoAction);
                });

            migrationBuilder.CreateTable(
                name: "Product",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    name = table.Column<string>(type: "varchar(30)", nullable: true),
                    price = table.Column<decimal>(type: "decimal(10,2)", nullable: false),
                    sale = table.Column<bool>(nullable: false),
                    salePrice = table.Column<decimal>(type: "decimal(10,2)", nullable: false),
                    Action = table.Column<string>(type: "varchar(100)", nullable: false),
                    img = table.Column<string>(nullable: true),
                    shortDescription = table.Column<string>(nullable: true),
                    categoryid = table.Column<int>(nullable: false),
                    subCategoriaid = table.Column<int>(nullable: false),
                    brandid = table.Column<int>(nullable: false),
                    detailsid = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Product", x => x.id);
                    table.ForeignKey(
                        name: "FK_Product_brand_brandid",
                        column: x => x.brandid,
                        principalTable: "brand",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Product_Category_categoryid",
                        column: x => x.categoryid,
                        principalTable: "Category",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Product_detail_detailsid",
                        column: x => x.detailsid,
                        principalTable: "detail",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Product_SubCategoria_subCategoriaid",
                        column: x => x.subCategoriaid,
                        principalTable: "SubCategoria",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "specs",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    productid = table.Column<int>(nullable: false),
                    warranty = table.Column<string>(type: "varchar(30)", nullable: true),
                    color = table.Column<string>(type: "varchar(20)", nullable: true),
                    size = table.Column<decimal>(type: "decimal(5,2)", nullable: false),
                    specs = table.Column<string>(type: "varchar(max)", nullable: true),
                    galleryid = table.Column<int>(nullable: false),
                    typeid = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_specs", x => x.id);
                    table.ForeignKey(
                        name: "FK_specs_galleries_galleryid",
                        column: x => x.galleryid,
                        principalTable: "galleries",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_specs_Product_productid",
                        column: x => x.productid,
                        principalTable: "Product",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_specs_type_typeid",
                        column: x => x.typeid,
                        principalTable: "type",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Product_brandid",
                table: "Product",
                column: "brandid");

            migrationBuilder.CreateIndex(
                name: "IX_Product_categoryid",
                table: "Product",
                column: "categoryid");

            migrationBuilder.CreateIndex(
                name: "IX_Product_detailsid",
                table: "Product",
                column: "detailsid");

            migrationBuilder.CreateIndex(
                name: "IX_Product_subCategoriaid",
                table: "Product",
                column: "subCategoriaid");

            migrationBuilder.CreateIndex(
                name: "IX_specs_galleryid",
                table: "specs",
                column: "galleryid");

            migrationBuilder.CreateIndex(
                name: "IX_specs_productid",
                table: "specs",
                column: "productid");

            migrationBuilder.CreateIndex(
                name: "IX_specs_typeid",
                table: "specs",
                column: "typeid");

            migrationBuilder.CreateIndex(
                name: "IX_SubCategoria_categoryid",
                table: "SubCategoria",
                column: "categoryid");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "specs");

            migrationBuilder.DropTable(
                name: "galleries");

            migrationBuilder.DropTable(
                name: "Product");

            migrationBuilder.DropTable(
                name: "type");

            migrationBuilder.DropTable(
                name: "brand");

            migrationBuilder.DropTable(
                name: "detail");

            migrationBuilder.DropTable(
                name: "SubCategoria");

            migrationBuilder.DropTable(
                name: "Category");
        }
    }
}
