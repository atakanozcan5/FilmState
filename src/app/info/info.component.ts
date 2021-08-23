import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movies } from 'app/mocks/mock-movies';
import { Movie } from 'app/Movie';
import { MovieService } from 'app/movie.service';
import { SelectItem } from 'primeng/api';

declare interface TableData {
  headerRow?: string[];
  dataRows?: string[][];
} 
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  public WriterTable: TableData;
  public CastTable: TableData;
  public DirectorTable:TableData;
  items: SelectItem[];
  item: string;
  movies:Movie[];
  movie:Movie;
 
  constructor(private route:ActivatedRoute, private movieService: MovieService) { 
    this.items = [];
    for (let i = 0; i < 10; i++) {
      this.items.push({label: 'Item ' + i, value: 'Item ' + i});
    }

    this.movies = Movies;

    
  }
  
  ngOnInit(): void {
    this.getMovie("1");
    this.CastTable = {
      headerRow: [ 'ID', 'Name', 'Surname', ],
      dataRows: []
    };
    this.DirectorTable = {

      headerRow:['ID', 'Name', 'Surname', ],
      dataRows:[]
    };

      
    this.WriterTable = {
      headerRow: ['ID', 'Name', 'Surname'],
      dataRows: []

    };
  }
  getMovie(tempId:string){
  const id = this.route.snapshot.paramMap.get('id');
   // this.movie = this.movies.find(movie => tempId ===movie.guid);
   this.movieService
   .getMovieByGuid(id)
   .subscribe(m => {
       this.movie = m;
       this.movie.fullYear = new Date(this.movie.releaseDate).getFullYear();

       let PersonNames:string[]= this.movie.moviePersonNames;
       let PersonSurnames: string[] = this.movie.moviePersonSurnames;
       for (let index = 0; index < PersonNames.length; index++) {
         console.log("person title => " + this.movie.personTitles[index]);
        if(this.movie.personTitles[index] === "director"){
          console.log("directore eklendi => ");
          this.DirectorTable.dataRows.push([index.toString(), PersonNames[index], PersonSurnames[index]]);
        }else if(this.movie.personTitles[index] === "writer"){
          this.WriterTable.dataRows.push([index.toString(), PersonNames[index], PersonSurnames[index]]);

        }else{
          this.CastTable.dataRows.push([index.toString(), PersonNames[index], PersonSurnames[index]]);

        }
        
         
       }
      });
    //console.log("year => " + this.movie.releaseDate.getFullYear());
   }

}
