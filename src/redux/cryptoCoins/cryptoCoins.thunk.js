import {getCryptoCoinsRequest, getCryptoCoinsSuccess, getCryptoCoinsFailed} from "./cryptoCoins.action";
import {api} from "../../api";


export const fetchCryptoCoins = (count) => {
    return (dispatch) => {
        dispatch(getCryptoCoinsRequest())
        api.get(`/coins?limit=${count}`)
            .then(res => dispatch(getCryptoCoinsSuccess(res.data.data)))
            .catch(err => dispatch(getCryptoCoinsFailed(err.message)))
    }
}

