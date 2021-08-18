using MovieAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MovieAPI.DAL.Abstract
{
    interface IMovieRepository
    {
        List<Movie> GetAllMovies();
        Movie GetMovieByUUID(Guid guid);
        bool CreateMovie(Movie movie);
        bool UpdateMovie(Movie movie);
        bool DeleteMovie(Movie movie);
    }
}
