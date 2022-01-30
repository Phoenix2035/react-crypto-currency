import axios from "axios";

const cryptoApiCoinsHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '6c4b4f3bcbmsh664e05ef5e56805p1eb419jsnf5bdb50870a0'
}

export const coinsApi = axios.create({
    baseURL: "https://coinranking1.p.rapidapi.com",
    headers: cryptoApiCoinsHeaders
})


const cryptoNewsHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '6c4b4f3bcbmsh664e05ef5e56805p1eb419jsnf5bdb50870a0'
}

export const newsApi = axios.create({
    baseURL: "https://bing-news-search1.p.rapidapi.com",
    headers: cryptoNewsHeaders
})
