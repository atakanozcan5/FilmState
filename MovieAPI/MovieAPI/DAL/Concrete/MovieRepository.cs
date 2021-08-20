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

        public List<Movie> GetAllMovies()
        {
            using (var db = new EldinterndbContext())
            {
                return db.Movie.ToList();
            }
        }

        public string GetMovieByUUID(Guid guid)
        {
            using (var db = new EldinterndbContext())
            {

                //var movie = db.Movie.Include(s => s.MovieGenre)
                //                    .ThenInclude(s=>s.GenreGu) .First(m => m.Guid == guid);

                //Collection<MovieGenre> movieGenres = db.MovieGenre.Where(mg => mg.MovieGuid == guid).FirstOrDefault();
                var ee = db.Movie
                        .Join(db.MovieGenre, 
                                 m => m.Guid, mg => mg.MovieGuid
                                 ,(x, y) => new { movieName = x.Name, movidesc=x.Description,movieId=x.Guid, GenreId=y.GenreGuid })
                    
                        .Join(db.Genre
                                ,g=>g.GenreId,g=>g.Guid
                                ,(x,y)=>new {x.movidesc,y.Name,x.movieId ,x.movieName})


                    .Where(x=>x.movieId== new Guid("d7a20ba8-ff6c-11eb-9a03-0242ac130003"))
                    .Select(row => new Film { genres = row.Name});
                //(System.Data.Objects.ObjectQuery)ee).ToTraceString();


                Console.WriteLine(ee);

                //string query  = "select * from"+
                //"eld_movie.movie inner join eld_movie.movie_genre on eld_movie.movie.guid = eld_movie.movie_genre.movie_guid"+
                //"join eld_movie.genre on eld_movie.genre.guid = eld_movie.movie_genre.genre_guid" +
                //" where eld_movie.movie.guid = 'd7a20ba8-ff6c-11eb-9a03-0242ac130003' ";
                //List<MovieGenre> movieGenre = db.MovieGenre.Where(mg => mg.MovieGuid == guid).ToList();
                //List<Genre> genres = new List<Genre>(); 
                //foreach (MovieGenre moviegnr in movieGenre)
                //{
                //    genres = db.Genre.Where(g => g.Guid == moviegnr.GenreGuid).ToList();
                //}
                ////   Genre g = db.Genre.Where(genre => movieGenre)

            //   Console.WriteLine(movieGenre[0].ToString());
                return ee.ToString();
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

       
    }
}
