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
        bool UpdatePerson(Guid personGuid, string personName, string personSurname);

        bool UpdateGenre(Genre genre);
        bool AddNewGenreType(string genreName, string Code);
        bool DeleteGenre(Guid guid);
        List<Genre> GetAllGenres();
    }
}
