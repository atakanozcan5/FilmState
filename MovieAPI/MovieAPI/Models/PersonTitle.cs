// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

#nullable disable

namespace MovieAPI.Models
{
    public partial class PersonTitle
    {
        public PersonTitle()
        {
            MoviePerson = new HashSet<MoviePerson>();
        }

        public Guid Guid { get; set; }
        public string Name { get; set; }
        public string Code { get; set; }

        public virtual ICollection<MoviePerson> MoviePerson { get; set; }
    }
}