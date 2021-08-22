import { Movie } from "app/Movie";

export const Movies:Movie[] = [
    {
        guid:"1",
        genres:['action', 'sci-fi', 'drama'], 
        description:"1 milyon yıl sonra tamamen iskelet halinde kalan insanlık hayatta kalmaya çalışmaktadır.",
        rate:9.5,
        name:"terminator",
        releaseDate:new Date(),
        runTime:144,
        posterURL:'link',
        moviePersonNames: ['oğuzhan','ahmet'],
        moviePersonBirthDates:[new Date(), new Date()],
        moviePersonSurnames:['akdoğan', 'zaman'],
        personTitles:['star', 'director']

    }

];