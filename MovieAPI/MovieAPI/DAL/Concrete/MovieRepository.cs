using Microsoft.EntityFrameworkCore;
using MovieAPI.Bean;
using MovieAPI.DAL.Abstract;
using MovieAPI.Models;
using MovieAPI.MovieDbContext;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Threading.Tasks;

namespace MovieAPI.DAL.Concrete
{
    public class MovieRepository : IMovieRepository
    {
        public bool CreateMovie(Movie movie)
        {
            using (var db = new EldinterndbContext())
            {
                db.Movie.Add(movie);
                db.SaveChanges();
                return true;
            }
        }

        public bool DeleteMovie(Movie movie)
        {
            return false;
        }

        public List<Movie> GetAllMovies(int a, int b)
        {
            using (var db = new EldinterndbContext())
            {
                return db.Movie.Skip(a).Take(b).ToList();
            }
        }

        public Film GetMovieByUUID(Guid guid)
        {
            using (var db = new EldinterndbContext())
            { 

                var ee = db.Movie
                    .Where(m => m.Guid == guid)
                    .Include(m => m.MovieGenre).ThenInclude(mg => mg.GenreGu)
                    .Include(m => m.MoviePerson).ThenInclude(mp => mp.PersonGu)
                    .Include(m => m.MoviePerson).ThenInclude(mp => mp.PersonTitleGu)
                    .AsNoTracking().ToList();
                Movie movie = ee[0];
              //  Console.WriteLine(ee[0].MovieGenre.ToList()[0].GenreGu.Name);
               List<string> genres= movie
                    .MovieGenre
                    .ToList()
                    .Select(mg => mg.GenreGu.Name)
                    .ToList();

                List<Person> PersonNames = movie
                     .MoviePerson.ToList()
                     .Select(mp => mp.PersonGu)
                     .ToList();
                
                List<string> PersonTitles = movie
                    .MoviePerson.ToList()
                    .Select(mp => mp.PersonTitleGu.Name)
                    .ToList();
            
                return new Film { 
                    Genres = genres, 
                    MoviePersonNames = PersonNames.Select(mpn => mpn.Name).ToList(), 
                    MoviePersonSurnames = PersonNames.Select(mpn => mpn.Surname).ToList(),
                    MoviePersonBirthDates = PersonNames.Select(mpn => mpn.Birthdate).ToList(),
                    PersonTitles = PersonTitles,
                    Description = movie.Description,
                    Name = movie.Name,
                    Guid = movie.Guid,
                    PosterURL = movie.PosterUrl,
                    Rate = movie.Rate,
                    ReleaseDate = movie.ReleaseDate,
                    RunTime = movie.Runtime,
                    PersonGuids = PersonNames.Select(mpn => mpn.Guid).ToList()
                };
            }
        }

        public List<MovieGenre> GetMovieGenres(Guid guid)
        {
            using (var db = new EldinterndbContext())
            {
               
                return db.MovieGenre.Where(mg => mg.MovieGuid == guid).ToList();
            }
            }

        public bool UpdateMovie(Movie movie)
        {
            throw new NotImplementedException();
        }

        public bool UpdatePerson(Guid personId, string personName, string personSurname)
        {
            using (var db = new EldinterndbContext())
            {
                Console.WriteLine("person Id => " + personId + " değişecek name => " + personName + " değişecek surname => " + personSurname);
                var person = db.Person.Where(person => person.Guid == personId).ToList();
                if (person == null)
                {
                    return false;
                }
                else
                {
                    Person p = person[0];
                    p.Name = personName;
                    p.Surname = personSurname;
                    db.Entry(p).State = EntityState.Modified;
                    db.SaveChanges();
                }
                return true;

            }
        }


    }
}
/*
 
               var ee = db.Movie
                      .Join(db.MovieGenre, 
                                 m => m.Guid, mg => mg.MovieGuid
                                 ,(x, y) => new { movieName = x.Name, movidesc=x.Description,movieId=x.Guid, GenreId=y.GenreGuid })

                        .Join(db.Genre
                                ,g=>g.GenreId,g=>g.Guid
                                ,(x,y)=>new {x.movidesc,y.Name,x.movieId ,x.movieName})


                    .Where(x=>x.movieId== new Guid("d7a20ba8-ff6c-11eb-9a03-0242ac130003"))
                    .Select(row => new Film { genres = row.Name});

                  /string query  = "select * from"+
                //"eld_movie.movie inner join eld_movie.movie_genre on eld_movie.movie.guid = eld_movie.movie_genre.movie_guid"+
                //"join eld_movie.genre on eld_movie.genre.guid = eld_movie.movie_genre.genre_guid" +
                //" where eld_movie.movie.guid = 'd7a20ba8-ff6c-11eb-9a03-0242ac130003' ";
              
  
 */