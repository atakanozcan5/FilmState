import { Movie } from "app/Movie";

export const Movies:Movie[] = [
    {
        guid:"1",
        movieGenre:[
            {guid:"abcd", name:"action", code:"ac"}
        ], 
        description:"1 milyon yıl sonra tamamen iskelet halinde kalan insanlık hayatta kalmaya çalışmaktadır.",
        rate:9.5,
        name:"terminator",
        releaseDate:"2021",
        runtime:144,
        posterUrl:'link',
        moviePerson: [{birthdate:"1998", name:"oğuzhan", surname: "akdogan", sex:"m", guid:"qe"}]
    }

];