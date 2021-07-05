import {
    SET_LOADING,
    SET_ERROR,
    SET_DATA_PERSONEL
} from '../actions/actionType'

const initialState = {
    dataPersonel: [],
    loading: false,
    error: null
}

export default function reducer(state = initialState, action) {
    let { type, payload } = action
    switch (type) {
        case SET_DATA_PERSONEL:
            return { ...state, dataPersonel: payload }
        case SET_LOADING:
            return { ...state, loading: payload }
        case SET_ERROR:
            return { ...state, error: payload }
        default:
            return state
    }
}