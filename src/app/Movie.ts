export interface Movie{
    id:number;
    Name:string;
    IMDB:number;
    date:Date;
    Description:string;
    Time:string;
    Gender:string[];
    cast:Cast[];
    PhotoLink:string;

}

export interface Cast{
    Name:string;
    BirthDate:Date;
    Sex:boolean;

}