import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movies } from 'app/mocks/mock-movies';
import { Movie } from 'app/Movie';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-moive-details',
  templateUrl: './moive-details.component.html',
  styleUrls: ['./moive-details.component.css']
})
export class MoiveDetailsComponent implements OnInit {
  items: SelectItem[];
  item: string;

  movies:Movie[];
  display:boolean;
  movie:Movie;
  constructor(private route:ActivatedRoute) {
    this.display =true;
    this.items = [];
    for (let i = 0; i < 10; i++) {
        this.items.push({label: 'Item ' + i, value: 'Item ' + i});
    }

    this.movies = Movies;
   }

   ngOnInit(): void {
     this.getMovie("1");
  }


   getMovie(tempId:string){
    const id = Number(this.route.snapshot.paramMap.get('guid'));
    this.movie = this.movies.find(movie => tempId === movie.guid);


   }
 
  
}
