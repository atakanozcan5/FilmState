using Microsoft.AspNetCore.Mvc;
using MovieAPI.Bean;
using MovieAPI.BusinessLogic.Abstract;
using MovieAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json;
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
        [HttpPut("{genre}")]
        public bool AddNewGenreType([FromBody] Genre genre)
        {

            
            return this.service.AddNewGenreType(genre.Name, genre.Code);
        }

        [Route("getgenres")]
        [HttpGet]
        public List<Genre> GetGenres()
        {
            return this.service.GetAllGenres();
        }


        [Route("deletegenre")]
        [HttpPut("{guid}")]
        public bool DeleteGenre(string guid)
        {

            return this.service.DeleteGenre(new Guid(guid));
        }

        [Route("updategenre")]
        [HttpPut]
        public bool UpdateGenre([FromBody]Genre genre)
        {
            return this.service.UpdateGenre(genre);
        }

        [Route("updatemovie")]
        [HttpPut]
        public bool UpdateMovie([FromBody] Movie movie)
        {
            return this.service.UpdateMovie(movie);
        }

        [Route("deleteperson")]
        [HttpDelete("{personGuid}")]
        public bool DeletePerson(string personGuid)
        {
            return this.service.DeletePerson(personGuid.ToString());
        }

        [Route("newperson")]
        [HttpPut]
        public bool AddNewPerson([FromBody]myAddNewPerson newPerson)
        {
            return this.service.AddNewPerson(newPerson.movieGuids, newPerson.titleGuids, newPerson.person);
        }

        [Route("addnewmovie")]
        [HttpPut]
        public bool AddNewMovie([FromBody] Film film)
        {
            return this.service.AddNewMovie(film);
        }
    }

    public class A
    {
        public string id { get; set; }
        public string name { get; set; }
        public string surname { get; set; }
    }

    public class myAddNewPerson
    {
        public List<Guid> movieGuids { get; set; }
        public List<Guid> titleGuids { get; set; }
        public Person person { get; set; }

    }

}
