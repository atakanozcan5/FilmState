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
        bool AddNewMovie(Film film);
        bool UpdateGenre(Genre genre);
        bool UpdateMovie(Movie film);
        bool AddNewGenreType(string genreName, string Code, string[] filmNames);
        bool DeleteGenre(Guid guid);
        bool DeletePerson(string personGuid);
        bool AddNewPerson(List<Guid> movieGuid, List<Guid> titleGuid, Person person);
        List<Genre> GetAllGenres();
    }
}
