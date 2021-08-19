import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movies } from 'app/mocks/mock-movies';
import { Movie } from 'app/Movie';
import { SelectItem } from 'primeng/api';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  public tableData1: TableData;
  public tableData2: TableData;
  items: SelectItem[];
  item: string;
  movies:Movie[];
  movie:Movie;
  constructor(private route:ActivatedRoute) { 
    this.items = [];
    for (let i = 0; i < 10; i++) {
      this.items.push({label: 'Item ' + i, value: 'Item ' + i});
  }

  this.movies = Movies;
  }
  
  ngOnInit(): void {
    this.getMovie(1);
    this.tableData2 = {
      headerRow: [ 'ID', 'Name', 'Code', ],
      dataRows: [
          ['1', 'Dakota Rice', 'Niger', ],
      ]
    };
  }
  getMovie(tempId:number){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.movie = this.movies.find(movie => tempId ==movie.id);


   }

}
