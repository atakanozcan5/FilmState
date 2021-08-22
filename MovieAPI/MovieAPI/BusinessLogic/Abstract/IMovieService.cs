using MovieAPI.Bean;
using MovieAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MovieAPI.BusinessLogic.Abstract
{
   public interface IMovieService
    {
        List<Movie> GetAllMovies(int a, int b);

        Film GetMovieByGuid(Guid guid);

        List<MovieGenre> GetMovieGenres(Guid id);

    }
}
