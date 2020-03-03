using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Teste.Data.Migrations
{
    public partial class V1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Escolaridades",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    descricao = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Escolaridades", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Usuarios",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nome = table.Column<string>(nullable: true),
                    sobrenome = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    DataNascimento = table.Column<DateTime>(nullable: false),
                    IdEscolaridade = table.Column<int>(nullable: false),
                    Escolaridadeid = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Usuarios", x => x.id);
                    table.ForeignKey(
                        name: "FK_Usuarios_Escolaridades_Escolaridadeid",
                        column: x => x.Escolaridadeid,
                        principalTable: "Escolaridades",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Usuarios_Escolaridadeid",
                table: "Usuarios",
                column: "Escolaridadeid");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Usuarios");

            migrationBuilder.DropTable(
                name: "Escolaridades");
        }
    }
}
