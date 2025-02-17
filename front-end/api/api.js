import axios from "axios"
import "dotenv/config"

// const {NODE_ENV} = process.env
const URL = "https://deploy-jornada-full-stack-9ofe.onrender.com/api"
// const URL = NODE_ENV === "development" ? "http://localhost:3001/api" : "/api"

const responseArtists = await axios.get(`${URL}/artists`)

const responseSongs = await axios.get(`${URL}/songs`)

export const artistArray = responseArtists.data
export const songsArray = responseSongs.data

console.log(responseArtists.data)