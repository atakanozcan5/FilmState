﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

#nullable disable

namespace MovieAPI.Models
{
    public partial class MovieGenre
    {
        public Guid Guid { get; set; }
        public Guid MovieGuid { get; set; }
        public Guid GenreGuid { get; set; }

        
        public virtual Genre GenreGu { get; set; }
        public virtual Movie MovieGu { get; set; }
    }
}