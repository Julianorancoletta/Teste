using Microsoft.EntityFrameworkCore.Migrations;

namespace Teste.Data.Migrations
{
    public partial class category : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "Action",
                table: "Category",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "img",
                table: "Category",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Action",
                table: "Category");

            migrationBuilder.DropColumn(
                name: "img",
                table: "Category");
        }
    }
}
