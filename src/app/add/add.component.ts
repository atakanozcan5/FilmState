import { Component, OnInit } from '@angular/core';
import { AddnewmovieService } from 'app/addnewmovie.service';
import { Movie } from 'app/Movie';
import { MovieService } from 'app/movie.service';
import { FilterService } from 'primeng/api';
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
    selectedMovies?:Movie[];
    personTitles:Title[];
    selectedTitles?:Title[];

    movieGuids:string[];
    titleGuids:string[];
  constructor(private countryService: AddnewmovieService,private primengConfig: PrimeNGConfig, private movieService: MovieService) { 
    //this.selectedCities = [ ];
    this.movies = [];
    this.movieGuids = [];
    this.titleGuids = [];
    this.personTitles = [
      {Guid:'48a75d50-a4ba-aab2-112c-6483f5ea0a42' , Name:'Star', Code:'STR'},
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
   
    // this.primengConfig.ripple = true;
    this.movieService.getMovieByInterval(0,100).subscribe(mvs => {

      this.movies = mvs;
    })

  } 

  addNewPerson(actorName:HTMLInputElement, actorSurname:HTMLInputElement):void{

    this.selectedMovies.forEach(element => {
      this.movieGuids.push(element.guid);
    });
    this.personTitles.forEach(element => {
      this.titleGuids.push(element.Guid)
    });
      this.movieService.addNewPerson(this.movieGuids , this.titleGuids, actorName.value, actorSurname.value).subscribe(bool => {
        if(bool){
          console.log("işlem tamamlandı!");
        }else{
          console.log("bir sıkıntı var !");
        }
      });
  }

}
