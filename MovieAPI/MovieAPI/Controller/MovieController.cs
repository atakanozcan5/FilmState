using Microsoft.AspNetCore.Mvc;
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

        [HttpGet]
        public List<Movie> Get()
        {
            return this.service.GetAllMovies();
        }

        [Route("getmovie")]
        [HttpGet("{id}")]
        public string Get(Guid id)
        {
            Console.WriteLine("request geldi!");
            var result = this.service.GetMovieByGuid(id);
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
