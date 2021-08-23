using MovieAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MovieAPI.Bean
{
    public class Film
    {
       public Guid Guid { get; set; }

       public string Name { get; set; }
       public int? RunTime { get; set; }
       public decimal? Rate { get; set; }
       public DateTime? ReleaseDate { get; set; }
       public string Description { get; set; }
       public string PosterURL { get; set; }
       

       public List<string> Genres { get; set; }
        public List<Guid> PersonGuids { get; set; }
        public List<string> PersonTitles { get; set; }
       public List<string> MoviePersonNames { get; set; }
       public List<string> MoviePersonSurnames { get; set; }
       public List<DateTime?> MoviePersonBirthDates { get; set; }

    }
}
