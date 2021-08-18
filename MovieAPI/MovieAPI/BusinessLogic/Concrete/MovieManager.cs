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

        public Movie GetMovieByGuid(Guid guid)
        {
            return movieRepository.GetMovieByUUID(guid);
        }
    }
}
