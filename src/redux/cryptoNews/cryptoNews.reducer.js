import types from './cryptoNews.types'

const initial_state = {
    cryptoNews: {},
    filteredCryptoNews: [],
    loading: false,
    error: null
}


const cryptoNews = (state = initial_state, { type, payload }) => {
    switch (type) {
        case types.FETCH_CRYPTO_NEWS_REQUEST:
            return { ...state, loading: true }

        case types.FETCH_CRYPTO_NEWS_SUCCESS:
            return { ...state, loading: false, cryptoNews: payload }

        case types.FETCH_CRYPTO_NEWS_FAILED:
            return { ...state, loading: false, error: payload }

        case types.FETCH_CRYPTO_NEWS_SEARCH:            
            return { ...state, filteredCryptoNews: state.cryptoNews?.coins?.filter(item => item.name.toLowerCase().includes(payload.toLowerCase())) }
        default:
            return state;
    }
};


export default cryptoNews
