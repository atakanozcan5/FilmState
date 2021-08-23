using Microsoft.AspNetCore.Mvc;
using MovieAPI.Bean;
using MovieAPI.BusinessLogic.Abstract;
using MovieAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MovieAPI.Controller
{
    [Route("api")]
    public class MovieController:ControllerBase
    {
       
        IMovieService service;
       public MovieController(IMovieService service)
        {
            this.service = service;
        }
       

        [Route("oguz")]
        public string merhaba()
        {
            return "merhaba";
        }


        [HttpGet("{a,b}")]
        [Route("getall")]
        public List<Movie> Get(int a ,int b)
        {
            return this.service.GetAllMovies(a,b);
        }


        [Route("getmovie")]
        [HttpGet("{id}")]
        public Film Get(Guid id)
        {
            Film result = this.service.GetMovieByGuid(id);
            return result;
        }


        [Route("genre")]
        [HttpGet("{id}")]
        public List<MovieGenre> GetMovieGenre(Guid id)
        {
            return this.service.GetMovieGenres(id);

        }
    }
}
