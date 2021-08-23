using MovieAPI.Bean;
using MovieAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MovieAPI.DAL.Abstract
{
    interface IMovieRepository
    {
        List<Movie> GetAllMovies(int a, int b);
        Film GetMovieByUUID(Guid guid);
        bool CreateMovie(Movie movie);
        bool UpdateMovie(Movie movie);
        bool DeleteMovie(Movie movie);
        bool UpdatePerson(Guid personId, string personName, string personSurname);
        List<MovieGenre> GetMovieGenres(Guid guid);
    }
}
