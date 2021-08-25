import { Component, OnInit } from '@angular/core';
import { AddnewmovieService } from 'app/addnewmovie.service';
import { FilterService } from 'primeng/api';
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
  providers: [FilterService,AddnewmovieService]
})
export class AddComponent implements OnInit {

  cities: any[];
  countries: any[];
  cascadeSelectCountries: any[];
  filteredCountries: any[];
  selectedCountries: any[];
  value1: any;
  value2: any;
  value3: any;
  value4: any;
  value5: any;
  value6: any;
  value7: any;
  value8: any;
  value9: any;
  value10: any;
  valueIconLeft: any;
  valueIconRight: any;
  constructor(private countryService: AddnewmovieService) { 
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];
  }

  ngOnInit() {
    this.countryService.getCountries().then(countries => {
      this.countries = countries;
  });
  this.cascadeSelectCountries = [
    {
        name: 'Australia',
        code: 'AU',
        states: [
            {
                name: 'New South Wales',
                cities: [
                    {cname: 'Sydney', code: 'A-SY'},
                    {cname: 'Newcastle', code: 'A-NE'},
                    {cname: 'Wollongong', code: 'A-WO'}
                ]
            },
            {
                name: 'Queensland',
                cities: [
                    {cname: 'Brisbane', code: 'A-BR'},
                    {cname: 'Townsville', code: 'A-TO'}
                ]
            },
            
        ]
    },
    {
        name: 'Canada', 
        code: 'CA',
        states: [
            {
                name: 'Quebec',
                cities: [
                    {cname: 'Montreal', code: 'C-MO'},
                    {cname: 'Quebec City', code: 'C-QU'}
                ]
            },
            {
                name: 'Ontario',
                cities: [
                    {cname: 'Ottawa', code: 'C-OT'},
                    {cname: 'Toronto', code: 'C-TO'}
                ]
            },
            
        ]
    },
    {
        name: 'United States',
        code: 'US',
        states: [
            {
                name: 'California',
                cities: [
                    {cname: 'Los Angeles', code: 'US-LA'},
                    {cname: 'San Diego', code: 'US-SD'},
                    {cname: 'San Francisco', code: 'US-SF'}
                ]
            },
            {
                name: 'Florida',
                cities: [
                    {cname: 'Jacksonville', code: 'US-JA'},
                    {cname: 'Miami', code: 'US-MI'},
                    {cname: 'Tampa', code: 'US-TA'},
                    {cname: 'Orlando', code: 'US-OR'}
                ]
            },
            {
                name: 'Texas',
                cities: [
                    {cname: 'Austin', code: 'US-AU'},
                    {cname: 'Dallas', code: 'US-DA'},
                    {cname: 'Houston', code: 'US-HO'}
                ]
            }
        ]
    }
];

  } 

  searchCountry(event) {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered : any[] = [];
    let query = event.query;
    for(let i = 0; i < this.countries.length; i++) {
        let country = this.countries[i];
        if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filtered.push(country);
        }
    }
    
    this.filteredCountries = filtered;
}

  showNotification(from, align){
      const type = ['','info','success','warning','danger'];

      var color = Math.floor((Math.random() * 4) + 1);
      $.notify({
          icon: "pe-7s-gift",
          message: "Welcome to <b>Light Bootstrap Dashboard</b> - a beautiful freebie for every web developer."
      },{
          type: type[color],
          timer: 1000,
          placement: {
              from: from,
              align: align
          }
      });
  }
}
