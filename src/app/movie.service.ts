import { HttpClient, HttpHeaders, HttpParams, JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movies } from './mocks/mock-movies';
import { Genre, Movie } from './Movie';
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

  public addNewMovie(film:Movie):Observable<boolean>{

    return this.http.put<boolean>(this.apiUrl + '/api/addnewmovie',film)
        .pipe(catchError(this.handleError<boolean>('addNewMovie', false)));
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

  public updateGenre(guid:string, genreName:string, code:string): Observable<boolean>{
    var obj = {
      Guid:guid,
      Name:genreName,
      Code:code
    }

    return this.http.put<boolean>(this.apiUrl + '/api/updategenre',obj)
    .pipe(catchError(this.handleError<boolean>('addNewGenre', false)));
  }

  public addNewGenre(genreName:string, Code:string, filmNames:string[]):Observable<boolean>{
    var obj ={
        Name:genreName,
        Code:Code
    }
    return this.http.put<boolean>(this.apiUrl + '/api/newgenre?filmNames='+ filmNames,obj)
    .pipe(catchError(this.handleError<boolean>('addNewGenre', false)));

  }

  public updateMovie(guid:string, name:string, releaseDate:Date, rate:number):Observable<boolean>{

    var obj = {
      Guid:guid,
      Name:name,
      ReleaseDate:releaseDate,
      Rate:rate
    }
    return this.http.put<boolean>(this.apiUrl + '/api/updatemovie',obj)
    .pipe(catchError(this.handleError<boolean>('addNewGenre', false)));

  }

  public getGenres():Observable<Genre[]>{
    return this.http.get<Genre[]>(this.apiUrl + '/api/getgenres')
    .pipe(catchError(this.handleError<Genre[]>('getGenres', [])));

  }

  public removePersonByGuid(personGuid:string):Observable<boolean  | ArrayBuffer>{
    var obj = {
      personGuid:personGuid
    }
    var hearderlar = new HttpHeaders();
    hearderlar.append('Content-Type' , 'application/json');
    return this.http.put<boolean  | ArrayBuffer>('https://localhost:44356/api/deleteperson?personGuid=' + personGuid,hearderlar)
    .pipe(catchError(this.handleError<boolean  | ArrayBuffer>('removePersonByGuid', false)));
  }



  public removeGenreByGuid(guid:string):Observable<boolean | ArrayBuffer>{
    var headers = new Headers();
    headers.append('Content-Type' , 'application/json');
    let httpParams = new HttpParams().set("guid", guid);
    return this.http.delete<boolean>(this.apiUrl + '/api/deletegenre',{params:httpParams})
    .pipe(catchError(this.handleError<boolean>('addNewGenre', false)));
  }

  public addNewPerson(movieGuids:string[], titleGuids:string[], personName:string, personSurname:string ){
    var obj = {
      movieGuids:movieGuids,
      titleGuids:titleGuids,
      person:{
        Name:personName,
        Surname:personSurname
      }
     
    }
    return this.http.put<boolean>(this.apiUrl + '/api/newperson', obj)
    .pipe(catchError(this.handleError<boolean>('addNewPerson', false)));

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
