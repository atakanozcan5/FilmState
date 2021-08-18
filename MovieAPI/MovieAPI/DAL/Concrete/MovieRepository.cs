using MovieAPI.DAL.Abstract;
using MovieAPI.Models;
using MovieAPI.MovieDbContext;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MovieAPI.DAL.Concrete
{
    public class MovieRepository : IMovieRepository
    {
        public bool CreateMovie(Movie movie)
        {
            using(var db= new EldinterndbContext())
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
            using(var db = new EldinterndbContext())
            {
                return db.Movie.ToList();
            }
        }

        public Movie GetMovieByUUID(Guid guid)
        {
            using(var db = new EldinterndbContext())
            {
                return db.Movie.First(m => m.Guid == guid);
            }
        }

        public bool UpdateMovie(Movie movie)
        {
            throw new NotImplementedException();
        }
    }
}
