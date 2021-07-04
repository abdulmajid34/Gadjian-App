import {
    SET_DATA_PERSONEL,
    SET_LOADING,
    SET_ERROR
} from '../actions/actionType'

export function dataPersonel(payload) {
    return { type: SET_DATA_PERSONEL, payload: payload }
}
export function setLoading(payload) {
    return { type: SET_LOADING, payload: payload }
}
export function setError(payload) {
    return { type: SET_ERROR, payload: payload }
}

// API = https://randomuser.me/api/?results=4

export function fetchDataPersonel(page) {
    return (dispatch) => {
        fetch(`https://randomuser.me/api/?results=4&page=${page}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data, 'INI HASIL DATA DI ACTION');
            dispatch(dataPersonel(data.results))
        })
        .catch((err) => {
            console.log(err);
            dispatch(setError(err))
        })
        .finally((_) => {
            dispatch(setLoading(false))
        })
    }
}