// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using MovieAPI.Models;

#nullable disable

namespace MovieAPI.MovieDbContext
{
    public partial class EldinterndbContext : DbContext
    {
        public EldinterndbContext()
        {
        }

        public EldinterndbContext(DbContextOptions<EldinterndbContext> options)
            : base(options)
        {

        }

        public virtual DbSet<Genre> Genre { get; set; }
        public virtual DbSet<Movie> Movie { get; set; }
        public virtual DbSet<MovieGenre> MovieGenre { get; set; }
        public virtual DbSet<MoviePerson> MoviePerson { get; set; }
        public virtual DbSet<Person> Person { get; set; }
        public virtual DbSet<PersonTitle> PersonTitle { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            optionsBuilder.UseNpgsql(
                @"Host=eld-ss-19;Database=eldinterndb;Username=intern;Password=eldintern;Port=1455;"
                );
                }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "tr_TR.UTF8");

            modelBuilder.Entity<Genre>(entity =>
            {
                entity.HasKey(e => e.Guid)
                    .HasName("genre_pkey");

                entity.ToTable("genre", "eld_movie");

                entity.Property(e => e.Guid)
                    .ValueGeneratedNever()
                    .HasColumnName("guid");

                entity.Property(e => e.Code)
                    .IsRequired()
                    .HasMaxLength(3)
                    .HasColumnName("code");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(32)
                    .HasColumnName("name");
            });

            modelBuilder.Entity<Movie>(entity =>
            {
                entity.HasKey(e => e.Guid)
                    .HasName("movie_pkey");

                entity.ToTable("movie", "eld_movie");

                entity.Property(e => e.Guid)
                    .ValueGeneratedNever()
                    .HasColumnName("guid");

                entity.Property(e => e.Description).HasColumnName("description");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name");

                entity.Property(e => e.PosterUrl).HasColumnName("poster_url");

                entity.Property(e => e.Rate)
                    .HasPrecision(2, 1)
                    .HasColumnName("rate");

                entity.Property(e => e.ReleaseDate)
                    .HasColumnType("date")
                    .HasColumnName("release_date");

                entity.Property(e => e.Runtime).HasColumnName("runtime");
            });

            modelBuilder.Entity<MovieGenre>(entity =>
            {
                entity.HasKey(e => e.Guid)
                    .HasName("movie_genre_pkey");

                entity.ToTable("movie_genre", "eld_movie");

                entity.Property(e => e.Guid)
                    .ValueGeneratedNever()
                    .HasColumnName("guid");

                entity.Property(e => e.GenreGuid).HasColumnName("genre_guid");

                entity.Property(e => e.MovieGuid).HasColumnName("movie_guid");

                entity.HasOne(d => d.GenreGu)
                    .WithMany(p => p.MovieGenre)
                    .HasForeignKey(d => d.GenreGuid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("genre_fk");

                entity.HasOne(d => d.MovieGu)
                    .WithMany(p => p.MovieGenre)
                    .HasForeignKey(d => d.MovieGuid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("movie_fk");
            });

            modelBuilder.Entity<MoviePerson>(entity =>
            {
                entity.HasKey(e => e.Guid)
                    .HasName("movie_person_pkey");

                entity.ToTable("movie_person", "eld_movie");

                entity.Property(e => e.Guid)
                    .ValueGeneratedNever()
                    .HasColumnName("guid");

                entity.Property(e => e.MovieGuid).HasColumnName("movie_guid");

                entity.Property(e => e.PersonGuid).HasColumnName("person_guid");

                entity.Property(e => e.PersonTitleGuid).HasColumnName("person_title_guid");

                entity.HasOne(d => d.MovieGu)
                    .WithMany(p => p.MoviePerson)
                    .HasForeignKey(d => d.MovieGuid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("movie_fk");

                entity.HasOne(d => d.PersonGu)
                    .WithMany(p => p.MoviePerson)
                    .HasForeignKey(d => d.PersonGuid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("person_fk");

                entity.HasOne(d => d.PersonTitleGu)
                    .WithMany(p => p.MoviePerson)
                    .HasForeignKey(d => d.PersonTitleGuid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("person_title_fk");
            });

            modelBuilder.Entity<Person>(entity =>
            {
                entity.HasKey(e => e.Guid)
                    .HasName("person_pkey");

                entity.ToTable("person", "eld_movie");

                entity.Property(e => e.Guid)
                    .ValueGeneratedNever()
                    .HasColumnName("guid");

                entity.Property(e => e.Birthdate)
                    .HasColumnType("date")
                    .HasColumnName("birthdate");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(100)
                    .HasColumnName("name");

                entity.Property(e => e.Sex)
                    .HasMaxLength(1)
                    .HasColumnName("sex");

                entity.Property(e => e.Surname)
                    .IsRequired()
                    .HasMaxLength(100)
                    .HasColumnName("surname");
            });

            modelBuilder.Entity<PersonTitle>(entity =>
            {
                entity.HasKey(e => e.Guid)
                    .HasName("person_title_pkey");

                entity.ToTable("person_title", "eld_movie");

                entity.Property(e => e.Guid)
                    .ValueGeneratedNever()
                    .HasColumnName("guid");

                entity.Property(e => e.Code)
                    .IsRequired()
                    .HasMaxLength(3)
                    .HasColumnName("code");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(100)
                    .HasColumnName("name");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}