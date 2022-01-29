import types from './cryptoCoins.types';


export const getCryptoCoinsRequest = () => {
    return {
        type: types.FETCH_CRYPTO_COINS_REQUEST,
    }
};


export const getCryptoCoinsSuccess = (data) => {
    return {
        type: types.FETCH_CRYPTO_COINS_SUCCESS,
        payload: data
    }
};

export const getCryptoCoinsFailed = (err) => {
    return {
        type: types.FETCH_CRYPTO_COINS_FAILED,
        payload: err
    }
};

export const searchCryptoCoins = (search) => {
    return {
        type: types.FETCH_CRYPTO_COINS_SEARCH,
        payload: search
    }
};

