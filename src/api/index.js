import axios from "axios";

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '6c4b4f3bcbmsh664e05ef5e56805p1eb419jsnf5bdb50870a0'
}

export const api = axios.create({
    baseURL: "https://coinranking1.p.rapidapi.com",
    headers: cryptoApiHeaders
})
