import { Component, OnInit } from '@angular/core';
import { AddnewmovieService } from 'app/addnewmovie.service';
import { FilterService } from 'primeng/api';
import { SelectItem, PrimeNGConfig } from "primeng/api";

import { AddingFilm } from "./addingmovieservice";

declare var $:any;

interface Country {
  name: string;
  code: string;
}
@Component({
  selector: 'app-adding',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [AddnewmovieService]
})
export class AddComponent implements OnInit {

    countries:Country[];
    selectedCountries:Country[];

    items: SelectItem[]; 
    item: string;

  constructor(private countryService: AddnewmovieService,private primengConfig: PrimeNGConfig) { 
    this.countries = [
        {name: 'New York', code: 'NY'},
        {name: 'Rome', code: 'RM'},
        {name: 'London', code: 'LDN'},
        {name: 'Istanbul', code: 'IST'},
        {name: 'Paris', code: 'PRS'}
    ];
    this.items= [];
    this.countryService.getCountries().then(c => {this.items = c;});
  }

  ngOnInit() {
   
    this.primengConfig.ripple = true;


  } 

}
