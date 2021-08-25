﻿using MovieAPI.Bean;
using MovieAPI.BusinessLogic.Abstract;
using MovieAPI.DAL.Abstract;
using MovieAPI.DAL.Concrete;
using MovieAPI.Models;
using System;
using System.Collections.Generic;


namespace MovieAPI.BusinessLogic.Concrete
{
    public class MovieManager : IMovieService
    {
        private IMovieRepository movieRepository;

        public MovieManager()
        {
            movieRepository = new MovieRepository();
        }

        public bool AddNewGenreType(string genreName, string Code)
        {
            return this.movieRepository.AddNewGenreType(genreName, Code);
        }

        public bool DeleteGenre(Guid guid)
        {
            return this.movieRepository.DeleteGenre(guid);
        }

        public List<Genre> GetAllGenres()
        {
            return this.movieRepository.GetAllGenres();
        }

        public List<Movie> GetAllMovies(int a, int b)
        {
            return movieRepository.GetAllMovies(a,b);
        }

        public Film GetMovieByGuid(Guid guid)
        {
            var result = movieRepository.GetMovieByUUID(guid);
            return result;
        }

        public List<MovieGenre> GetMovieGenres(Guid id)
        {
           return this.movieRepository.GetMovieGenres(id);
        }

        public bool UpdatePerson(Guid personGuid, string personName, string personSurname)
        {

            return this.movieRepository.UpdatePerson(personGuid, personName, personSurname);
        }
    }
}
