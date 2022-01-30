import types from './cryptoNews.types';


export const getCryptoNewsRequest = () => {
    return {
        type: types.FETCH_CRYPTO_NEWS_REQUEST,
    }
};


export const getCryptoNewsSuccess = (data) => {
    return {
        type: types.FETCH_CRYPTO_NEWS_SUCCESS,
        payload: data
    }
};

export const getCryptoNewsFailed = (err) => {
    return {
        type: types.FETCH_CRYPTO_NEWS_FAILED,
        payload: err
    }
};

export const searchCryptoNews = (search) => {
    return {
        type: types.FETCH_CRYPTO_NEWS_SEARCH,
        payload: search
    }
};

