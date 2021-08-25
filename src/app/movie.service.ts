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

  private apiUrl = 'https://localhost:44356';
  constructor(private http: HttpClient) { }


  public getMovies():void{
    const movies = this.http.get<Movie[]>(this.apiUrl)
    .pipe( catchError(this.handleError<Movie[]>('getMovie', [])));
    console.log(movies);
  }


  public getMovieByGuid(id?:string):Observable<Movie>{
    let header = new HttpHeaders({'Access-Control-Allow-Origin': 'https://localhost:44356'});


    return this.http.get<Movie>(this.apiUrl + '/api/getmovie' +'?id=' + id, {headers: header})
    .pipe(catchError(this.handleError<Movie>('getMovieById', null)) );
  }

/**
 * 
 * @param min 
 * @param max 
 * @returns movie array 
 * @summary User only see the film according to specified interval arranged with min and max.
 */
   public getMovieByInterval(min:number, max:number):Observable<Movie[]>{
     const movies = this.http.get<Movie[]>(this.apiUrl + '/api/getall?a=' + min + '&b=' + max)
     .pipe(catchError(this.handleError<Movie[]>('getMovieByInterval', [])));
     return movies;
   }

   public updatePerson(GUID:string, Name:string, surName:string):Observable<boolean>{
      var obj:object = {
        id:GUID,
        name:Name,
        surname:surName
      };
      
      let headers = new HttpHeaders();
      headers.append('Content-type', 'application/json');
        return this.http.put<boolean>(this.apiUrl + '/api/updateperson',obj, {headers:headers})
        .pipe(catchError(this.handleError<boolean>('updatePerson', false)));
  }


  public addNewGenre(genreName:string, Code:string):Observable<boolean>{
    var obj ={
        Name:genreName,
        Code:Code
    }
    return this.http.put<boolean>(this.apiUrl + '/api/newgenre',obj)
    .pipe(catchError(this.handleError<boolean>('addNewGenre', false)));

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
