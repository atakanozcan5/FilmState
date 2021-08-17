export interface Movie{
    id:number;
    Name:string;
    IMDB:number;
    date:number;
    Description:string;
    Time:string;
    Genre:string[];
    cast:Cast[];
    PhotoLink:string;

}

export interface Cast{
    Name:string;
    BirthDate:Date;
    Sex:boolean;

}