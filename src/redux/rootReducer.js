import {combineReducers} from 'redux';
import cryptoCoins from "./cryptoCoins/cryptoCoins.reducer"
import cryptoNews from "./cryptoNews/cryptoNews.reducer"


export default combineReducers({
    cryptoCoins,
    cryptoNews
})
