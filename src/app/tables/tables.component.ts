import { Component, OnInit } from '@angular/core';
import { Movie } from 'app/Movie';
import { MovieService } from 'app/movie.service';
import { min } from 'rxjs/operators';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
    public tableData1: TableData;
    public tableData2: TableData;

    private startIndex:number;
    private endIndex:number;
     guidArray?:string[];
    guidnumber?:string;
    movies:Movie[];
    constructor(private movieService:MovieService) { 
      this.startIndex = 0;
      this.endIndex = 10;
    }

    ngOnInit() {
        
      this.tableData1 = {
          headerRow: [ 'Name', 'Release-Date', 'Rate'],
          dataRows: [
              [ 'Dakota Rice', 'Niger', 'Oud-Turnhout'],
              [ 'Minerva Hooper', 'Curaçao', 'Sinaai-Waas'],
              [ 'Sage Rodriguez', 'Netherlands', 'Baileux'],
              [ 'Philip Chaney', 'Korea, South', 'Overland Park'],
              [ 'Doris Greene', 'Malawi', 'Feldkirchen in Kärnten'],
              [ 'Mason Porter', 'Chile', 'Gloucester']
          ]
      };
      this.tableData2 = {
          headerRow: [ 'Name',  'Release-Date', 'Rate'],
          dataRows: []
      };
      this.guidArray=[];

      this.getMoviesByIndexInterval();


    }
    specifyRouteInput(guid:number):void{
        console.log("guid ney => " + guid + " guidin kendisi >= " + this.guidArray[guid]);
        this.guidnumber = this.guidArray[guid];

    }
    getMoviesByIndexInterval(): void{
        this.movieService.getMovieByInterval(this.startIndex, this.endIndex)
        .subscribe(movies =>{
                this.movies = movies;
                this.movies.forEach(movie => {
                    movie.fullYear = new Date(movie.releaseDate).getFullYear();
                    this.tableData2.dataRows.push([movie.name, movie.fullYear.toString(),movie.rate.toString() ])
                    let guid:string = movie.guid;
                    this.guidArray.push(guid.toString());
                    console.log("pushlanıyor => " + movie.guid + this.guidArray[0] + " " + guid);
                    this.guidnumber = movie.guid;
                    

                });
        });

    }

}
