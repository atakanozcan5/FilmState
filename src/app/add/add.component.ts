import { Component, OnInit } from '@angular/core';
import { AddnewmovieService } from 'app/addnewmovie.service';
import { FilterService } from 'primeng/api';
import { SelectItem, PrimeNGConfig } from "primeng/api";

import { AddingFilm } from "./addingmovieservice";

declare var $:any;

interface City {
  name: string,
  code: string
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

  constructor(private countryService: AddnewmovieService,private primengConfig: PrimeNGConfig) { 
    //this.selectedCities = [ ];
    this.cities = [
        {name: 'New York', code: 'NY'},
        {name: 'Rome', code: 'RM'},
        {name: 'London', code: 'LDN'},
        {name: 'Istanbul', code: 'IST'},
        {name: 'Paris', code: 'PRS'}
    ];
  }

  ngOnInit() {
   
    // this.primengConfig.ripple = true;


  } 

}
