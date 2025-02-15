import { artistArray } from "../../front-end/src/assets/database/artists.js";
import { songsArray } from "../../front-end/src/assets/database/songs.js";
import { db } from "./conect.js";

const newArtistsArray = artistArray.map((currentArtistObj)=>{
    const newArtistObj = {...currentArtistObj}
    delete newArtistObj.id

    return newArtistObj
} )

const newSongsArray = songsArray.map((currentSongObj)=>{
    const newSongObj = {...currentSongObj}
    delete newSongObj.id

    return newSongObj
} )

const responseSongs =  await db.collection('songs').insertMany(newSongsArray)
const responseArtists =  await db.collection('artists').insertMany(newArtistsArray)

console.log(responseArtists)
console.log(responseSongs)