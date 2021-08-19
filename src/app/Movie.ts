export interface Movie{
    guid:string;
    name:string;
    rate:number;
    releaseDate:string;
    posterUrl:string;
    description:string;
    runtime:number;
    movieGenre:Genre[];
    moviePerson:Person[];

}

export interface Cast{
    Name:string;
    BirthDate:Date;
    Sex:boolean;

}

export interface Genre{
    guid:string;
    name:string;
    code:string;
}

export interface Person{
    guid:string;
    name:string;
    surname:string;
    birthdate:string;
    sex:string;
}