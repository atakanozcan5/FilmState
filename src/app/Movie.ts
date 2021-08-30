export interface Movie{
    guid?:string;
    name:string;
    runTime:number;
    rate:number;
    releaseDate:Date;
    description:string;
    posterURL:string;
    genres:string[];
    personGuids?:string[];
    personTitles?:string[];
    moviePersonNames?:string[];
    moviePersonSurnames?:string[];
    moviePersonBirthDates?:Date[];
    fullYear?:number;

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