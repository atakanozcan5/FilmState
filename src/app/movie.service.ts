import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movies } from './mocks/mock-movies';
import { Movie } from './Movie';
import { catchError, map, tap } from 'rxjs/operators';


  
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiUrl = 'https://localhost:44356/api/movie';
  constructor(private http: HttpClient) { }


  public getMovies():void{
    const movies = this.http.get<Movie[]>(this.apiUrl)
    .pipe( catchError(this.handleError<Movie[]>('getMovie', [])));
    console.log(movies);
  }

  public getMovieByGuid():Observable<Movie>{
    let header = new HttpHeaders({'Access-Control-Allow-Origin': 'https://localhost:44356'});
   
    
    return this.http.get<Movie>(this.apiUrl + '/d7a20ba8-ff6c-11eb-9a03-0242ac130003', {headers: header})
    .pipe(catchError(this.handleError<Movie>('getMovieById', null)) );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
