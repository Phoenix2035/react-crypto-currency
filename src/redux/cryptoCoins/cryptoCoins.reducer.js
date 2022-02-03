import types from './cryptoCoins.types'

const initial_state = {
    cryptoCoins: {},
    filteredCryptoList: [],
    loading: false,
    error: null
}


const cryptoCoins = (state = initial_state, { type, payload }) => {
    switch (type) {
        case types.FETCH_CRYPTO_COINS_REQUEST:
            return { ...state, loading: true }

        case types.FETCH_CRYPTO_COINS_SUCCESS:
            return { ...state, loading: false, cryptoCoins: payload }

        case types.FETCH_CRYPTO_COINS_FAILED:
            return { ...state, loading: false, error: payload }

        case types.FETCH_CRYPTO_COINS_SEARCH:
            return { ...state, filteredCryptoList: state.cryptoCoins?.coins?.filter(item => item.name.toLowerCase().includes(payload.toLowerCase())) }
        default:
            return state;
    }
};


export default cryptoCoins
