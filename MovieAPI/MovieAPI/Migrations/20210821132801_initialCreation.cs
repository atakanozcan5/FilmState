using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace MovieAPI.Migrations
{
    public partial class initialCreation : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.EnsureSchema(
                name: "eld_movie");

            migrationBuilder.CreateTable(
                name: "genre",
                schema: "eld_movie",
                columns: table => new
                {
                    guid = table.Column<Guid>(type: "uuid", nullable: false),
                    name = table.Column<string>(type: "character varying(32)", maxLength: 32, nullable: false),
                    code = table.Column<string>(type: "character varying(3)", maxLength: 3, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("genre_pkey", x => x.guid);
                });

            migrationBuilder.CreateTable(
                name: "movie",
                schema: "eld_movie",
                columns: table => new
                {
                    guid = table.Column<Guid>(type: "uuid", nullable: false),
                    name = table.Column<string>(type: "text", nullable: false),
                    rate = table.Column<decimal>(type: "numeric(2,1)", precision: 2, scale: 1, nullable: true),
                    release_date = table.Column<DateTime>(type: "date", nullable: true),
                    poster_url = table.Column<string>(type: "text", nullable: true),
                    description = table.Column<string>(type: "text", nullable: true),
                    runtime = table.Column<int>(type: "integer", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("movie_pkey", x => x.guid);
                });

            migrationBuilder.CreateTable(
                name: "person",
                schema: "eld_movie",
                columns: table => new
                {
                    guid = table.Column<Guid>(type: "uuid", nullable: false),
                    name = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
                    surname = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
                    birthdate = table.Column<DateTime>(type: "date", nullable: true),
                    sex = table.Column<string>(type: "character varying(1)", maxLength: 1, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("person_pkey", x => x.guid);
                });

            migrationBuilder.CreateTable(
                name: "person_title",
                schema: "eld_movie",
                columns: table => new
                {
                    guid = table.Column<Guid>(type: "uuid", nullable: false),
                    name = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
                    code = table.Column<string>(type: "character varying(3)", maxLength: 3, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("person_title_pkey", x => x.guid);
                });

            migrationBuilder.CreateTable(
                name: "movie_genre",
                schema: "eld_movie",
                columns: table => new
                {
                    guid = table.Column<Guid>(type: "uuid", nullable: false),
                    movie_guid = table.Column<Guid>(type: "uuid", nullable: false),
                    genre_guid = table.Column<Guid>(type: "uuid", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("movie_genre_pkey", x => x.guid);
                    table.ForeignKey(
                        name: "genre_fk",
                        column: x => x.genre_guid,
                        principalSchema: "eld_movie",
                        principalTable: "genre",
                        principalColumn: "guid",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "movie_fk",
                        column: x => x.movie_guid,
                        principalSchema: "eld_movie",
                        principalTable: "movie",
                        principalColumn: "guid",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "movie_person",
                schema: "eld_movie",
                columns: table => new
                {
                    guid = table.Column<Guid>(type: "uuid", nullable: false),
                    movie_guid = table.Column<Guid>(type: "uuid", nullable: false),
                    person_guid = table.Column<Guid>(type: "uuid", nullable: false),
                    person_title_guid = table.Column<Guid>(type: "uuid", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("movie_person_pkey", x => x.guid);
                    table.ForeignKey(
                        name: "movie_fk",
                        column: x => x.movie_guid,
                        principalSchema: "eld_movie",
                        principalTable: "movie",
                        principalColumn: "guid",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "person_fk",
                        column: x => x.person_guid,
                        principalSchema: "eld_movie",
                        principalTable: "person",
                        principalColumn: "guid",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "person_title_fk",
                        column: x => x.person_title_guid,
                        principalSchema: "eld_movie",
                        principalTable: "person_title",
                        principalColumn: "guid",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_movie_genre_genre_guid",
                schema: "eld_movie",
                table: "movie_genre",
                column: "genre_guid");

            migrationBuilder.CreateIndex(
                name: "IX_movie_genre_movie_guid",
                schema: "eld_movie",
                table: "movie_genre",
                column: "movie_guid");

            migrationBuilder.CreateIndex(
                name: "IX_movie_person_movie_guid",
                schema: "eld_movie",
                table: "movie_person",
                column: "movie_guid");

            migrationBuilder.CreateIndex(
                name: "IX_movie_person_person_guid",
                schema: "eld_movie",
                table: "movie_person",
                column: "person_guid");

            migrationBuilder.CreateIndex(
                name: "IX_movie_person_person_title_guid",
                schema: "eld_movie",
                table: "movie_person",
                column: "person_title_guid");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "movie_genre",
                schema: "eld_movie");

            migrationBuilder.DropTable(
                name: "movie_person",
                schema: "eld_movie");

            migrationBuilder.DropTable(
                name: "genre",
                schema: "eld_movie");

            migrationBuilder.DropTable(
                name: "movie",
                schema: "eld_movie");

            migrationBuilder.DropTable(
                name: "person",
                schema: "eld_movie");

            migrationBuilder.DropTable(
                name: "person_title",
                schema: "eld_movie");
        }
    }
}
