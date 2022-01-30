import { getCryptoNewsRequest, getCryptoNewsSuccess, getCryptoNewsFailed } from "./cryptoNews.action";
import { newsApi } from "../../api";


export const fetchCryptoNews = (newsCategory, count) => {
    return (dispatch) => {
        dispatch(getCryptoNewsRequest())
        newsApi.get(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
            .then(res => dispatch(getCryptoNewsSuccess(res.data)))
            .catch(err => dispatch(getCryptoNewsFailed(err.message)))
    }
}

