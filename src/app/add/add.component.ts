import { Component, OnInit } from '@angular/core';
import { AddnewmovieService } from 'app/addnewmovie.service';
import { Movie } from 'app/Movie';
import { MovieService } from 'app/movie.service';
import { FilterService, MessageService } from 'primeng/api';
import { SelectItem, PrimeNGConfig } from "primeng/api";
import { elementAt } from 'rxjs/operators';

import { AddingFilm } from "./addingmovieservice";

declare var $:any;

interface City {
  name: string,
  code: string
}

interface Title{
  Guid:string,
  Name:string,
  Code:string
}
@Component({
  selector: 'app-adding',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [AddnewmovieService]
})
export class AddComponent implements OnInit {

    items: SelectItem[]; 
    item: string;

    cities: City[];
    selectedCities: City[]; 

    movies?:Movie[];
    selectedMovies:Movie[] = [];
    personTitles:Title[];
    selectedTitles:Title[] = [];

    movieGuids:string[];
    titleGuids:string[];

    selectedTitleNames?:string[] = [];

    genres:string[];
    selectedGenres?:string[];

    selectedFilmsGenreCard?:Movie[] = [];

  constructor(private countryService: AddnewmovieService,private primengConfig: PrimeNGConfig, private movieService: MovieService, private messageService: MessageService) { 
    //this.selectedCities = [ ];
    this.genres = ['sci-fi','dram','action', 'thriller'];
    this.movies = [];
    this.movieGuids = [];
    this.titleGuids = [];
    this.selectedMovies = [];
    this.selectedTitles = [];
    this.personTitles = [
      {Guid:'61532542-0285-11ec-9a03-0242ac130003' , Name:'Star', Code:'STR'},
      {Guid:'8240f7b2-6823-9177-1952-2226f8b23565', Name:'Writer', Code:'WRT'},
      {Guid:'d563de41-1a99-d120-506d-7cd05bcc4483', Name:'Director', Code:'DIR'},
      {Guid:'f96024e9-6832-c40e-ba7c-04bd4468770a', Name:'Producer', Code:'PRD'}
    ];

    this.selectedTitles = [];
    this.cities = [
        {name: 'New York', code: 'NY'},
        {name: 'Rome', code: 'RM'},
        {name: 'London', code: 'LDN'},
        {name: 'Istanbul', code: 'IST'},
        {name: 'Paris', code: 'PRS'},
        {name: 'New York', code: 'NY'},
        {name: 'Rome', code: 'RM'},
        {name: 'London', code: 'LDN'},
        {name: 'Istanbul', code: 'IST'},
        {name: 'Paris', code: 'PRS'}
    ];
  }

  ngOnInit() {
    this.movieGuids = [];
    this.titleGuids = [];
    // this.primengConfig.ripple = true;
    this.movieService.getMovieByInterval(0,100).subscribe(mvs => {

      this.movies = mvs;
    })

  } 

  addNewPerson(actorName:HTMLInputElement, actorSurname:HTMLInputElement):void{
   // console.log("movie count => " + this.selectedMovies.length);
    this.selectedMovies.forEach(element => {
      this.movieGuids.push(element.guid);
   //   console.log("mantar => " + element.guid);
    });
    this.selectedTitles.forEach(element => {
       this.titleGuids.push(element.Guid);
      console.log("mantar123 => " + element.Name);

    });
       this.movieService.addNewPerson(this.movieGuids , this.titleGuids, actorName.value, actorSurname.value).subscribe(bool => {
         if(bool){
           console.log("işlem tamamlandı!");
         }else{
           console.log("bir sıkıntı var !");
         }
       });
  }

  addNewGenre(genreName:HTMLInputElement, code:HTMLInputElement):void{

  let movieNames:string[] = [];

  this.selectedFilmsGenreCard.forEach(element => {
        movieNames.push(element.guid);
        console.log("movie pushlandı => "  + element.name);
  });
    this.movieService.addNewGenre(genreName.value, code.value, movieNames).subscribe(
      bool => {
       
        if(bool){
          this.messageService.add({key: 'tright', severity:'success', summary: 'Added', detail: 'New genre added successfully!'});
        }else{
          this.messageService.add({key: 'tright', severity:'error', summary: 'Added!', detail: 'process denied!'});
        }
        genreName.value = "";
        code.value = "";
        this.selectedFilmsGenreCard = [];
      }

    );

}

  addNewFilm(filmName:HTMLInputElement, runTime:HTMLInputElement,
    rate:HTMLInputElement, releaseDate:HTMLInputElement,posterUrl:HTMLInputElement,
    description:HTMLInputElement
    ):void{

      // console.log("film name => " + filmName.value + " runTime => " + runTime.value
      // + " rate => " + rate.value + " release date => " + releaseDate.value + " posterUrl => " +
      // posterUrl.value + " description => " + description.value
      // )

      // this.selectedGenres.forEach(element => {
      //   console.log(" genre name => " + element);
      // });

      let film:Movie = {
        description:description.value,
        name:filmName.value,
        genres:this.selectedGenres,
        posterURL:posterUrl.value,
        rate: parseFloat(rate.value),
        runTime:parseInt(runTime.value),
        releaseDate: new Date(releaseDate.value)

      };

      this.movieService.addNewMovie(film).subscribe(
        bool => {

          if(bool){
            this.messageService.add({key: 'tright', severity:'success', summary: 'Added', detail: 'New movie added successfully!'});
          }else{
            this.messageService.add({key: 'tright', severity:'error', summary: 'Added!', detail: 'process denied!'});
          }

        description.value = "";
        filmName.value = "";
        posterUrl.value = "";
        runTime.value = "";
        rate.value = "";
        releaseDate.value = "";
        this.selectedGenres = [];
        }
      );
  }

}
