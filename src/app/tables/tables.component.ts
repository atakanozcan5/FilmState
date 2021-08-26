import { Component, OnInit } from '@angular/core';
import { Movie } from 'app/Movie';
import { MovieService } from 'app/movie.service';
import { min } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Movies } from 'app/mocks/mock-movies';
import { Message, PrimeNGConfig, SelectItem } from 'primeng/api';

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
    display:boolean;
    
   
   
    filmGuids:string[];
    rate:string;
    msgs: Message[];

    private selectedMovieIndex:number;
    constructor(private movieService:MovieService) { 
      this.startIndex = 0;
      this.endIndex = 10;
      this.display = false;
      this.filmGuids = [];
    }

    updatepopup(isOpened:boolean, index:number): void{

        this.display = isOpened;

        if(!isOpened){
          this.selectedMovieIndex = -1;
        }else{
          this.selectedMovieIndex = index;
        }
    }

    onConfirm(name:HTMLInputElement, releaseDate:HTMLInputElement, rate:HTMLInputElement){
      console.log("çağırıldım" + " types = <" + this.movies[this.selectedMovieIndex].releaseDate)

       if(typeof(parseInt(releaseDate.value)) === "number" && typeof(parseFloat(releaseDate.value)) === "number"){
        console.log("girdim")

        const film = this.movies[this.selectedMovieIndex];
     //   film.releaseDate.setFullYear( parseInt(releaseDate.value)  );
        var date = new Date(film.releaseDate);
        date.setFullYear(parseInt(releaseDate.value));
        this.movieService.updateMovie( film.guid, name.value,date  ,parseFloat(rate.value))
        .subscribe(bool => {
            //pop-upa message service koy 
            if(bool){
              this.msgs = [
                {severity:'success', summary:'Success', detail:'Changes saved succesfully!'}
               ];
            }else{
              this.msgs =  [ {severity:'error', summary:'Error', detail:'There is a unexpected error occured!'}];
            }

            name.value = "";
            releaseDate.value = "";
            rate.value = "";
            this.selectedMovieIndex = -1;
        });  



       }

    }


    ngOnInit() {
        
      this.tableData1 = {
          headerRow: [ 'Name', 'Release-Date', 'Rate'],
          dataRows: []
      };
      this.tableData2 = {
          headerRow: [ 'Name',  'Release-Date', 'Rate'],
          dataRows: []
      };
      this.guidArray=[];
      this.msgs = [];
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
