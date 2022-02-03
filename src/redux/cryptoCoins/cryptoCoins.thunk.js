import { getCryptoCoinsRequest, getCryptoCoinsSuccess, getCryptoCoinsFailed, getCryptoDetailsRequest, getCryptoDetailsSuccess, getCryptoDetailsFailed } from "./cryptoCoins.action";
import { coinsApi } from "../../api";


export const fetchCryptoCoins = (count) => {
    return (dispatch) => {
        dispatch(getCryptoCoinsRequest())
        coinsApi.get(`/coins?limit=${count}`)
            .then(res => dispatch(getCryptoCoinsSuccess(res.data.data)))
            .catch(err => dispatch(getCryptoCoinsFailed(err.message)))
    }
}


