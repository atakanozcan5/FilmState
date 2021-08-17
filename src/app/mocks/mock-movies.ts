import { Movie } from "app/Movie";

export const Movies:Movie[] = [
    {
        id:1,
        Genre:['qwe','abc','db'], 
        Description:"1 milyon yıl sonra tamamen iskelet halinde kalan insanlık hayatta kalmaya çalışmaktadır.",
        IMDB:9.5,
        Name:"terminator",
        date:new Date().getFullYear(),
        Time:'2h 3min',
        PhotoLink:'link',
        cast: [{BirthDate: new Date(), Name:"dazlak", Sex:false}]
    }

];