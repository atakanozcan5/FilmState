using MovieAPI.BusinessLogic.Abstract;
using MovieAPI.DAL.Abstract;
using MovieAPI.DAL.Concrete;
using MovieAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MovieAPI.BusinessLogic.Concrete
{
    public class MovieManager : IMovieService
    {
        private IMovieRepository movieRepository;

        public MovieManager()
        {
            movieRepository = new MovieRepository();
        }
        public List<Movie> GetAllMovies()
        {
            return movieRepository.GetAllMovies();
        }

        public string GetMovieByGuid(Guid guid)
        {
            var result = movieRepository.GetMovieByUUID(guid);
            return result;
        }

        public List<MovieGenre> GetMovieGenres(Guid id)
        {
           return this.movieRepository.GetMovieGenres(id);
        }
    }
}
