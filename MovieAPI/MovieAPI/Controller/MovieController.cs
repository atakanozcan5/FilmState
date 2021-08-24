﻿using Microsoft.AspNetCore.Mvc;
using MovieAPI.Bean;
using MovieAPI.BusinessLogic.Abstract;
using MovieAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json.Linq;
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

        [Route("updateperson")]
        [HttpPut("{obj}")]
        public bool UpdatePerson([FromBody] A obj)
        {
            return this.service.UpdatePerson(new Guid(obj.id.ToString()), obj.name.ToString(), obj.surname.ToString());
        }


       
        [Route("newgenre")]
        [HttpPut]
        public bool AddNewGenreType([FromBody]JObject genre)
        {

            return this.service.AddNewGenreType(genre.GetValue("genrename").ToString(), genre.GetValue("code").ToString());
        }
    }

    public class A
    {
        public string id { get; set; }
        public string name { get; set; }
        public string surname { get; set; }
    }

}
