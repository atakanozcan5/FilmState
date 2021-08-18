using Microsoft.AspNetCore.Mvc;
using MovieAPI.BusinessLogic.Abstract;
using MovieAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MovieAPI.Controller
{
    [Route("api/[controller]")]
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

        [HttpGet("{id}")]
        public Movie Get(Guid id)
        {
            return this.service.GetMovieByGuid(id);
        }
    }
}
