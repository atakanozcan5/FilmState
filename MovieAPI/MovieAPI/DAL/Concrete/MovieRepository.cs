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

        public Movie GetMovieByUUID(Guid guid)
        {
            using (var db = new EldinterndbContext())
            {

                var movie = db.Movie.Where(m => m.Guid == guid).FirstOrDefault();
                //   db.Movie.First(m => m.Guid == guid);                
                //Collection<MovieGenre> movieGenres = db.MovieGenre.Where(mg => mg.MovieGuid == guid).FirstOrDefault();
                string query  = "select * from"+
                "eld_movie.movie inner join eld_movie.movie_genre on eld_movie.movie.guid = eld_movie.movie_genre.movie_guid"+
                "join eld_movie.genre on eld_movie.genre.guid = eld_movie.movie_genre.genre_guid" +
                " where eld_movie.movie.guid = 'd7a20ba8-ff6c-11eb-9a03-0242ac130003' ";
               List<MovieGenre> movieGenre = db.MovieGenre.Where(mg => mg.MovieGuid == guid).ToList();

                foreach (MovieGenre moviegnr in movieGenre)
                {
                   
                }
             //   Genre g = db.Genre.Where(genre => movieGenre)

                return null;
            }
        }

        public bool UpdateMovie(Movie movie)
        {
            throw new NotImplementedException();
        }
    }
}
