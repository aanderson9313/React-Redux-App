import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';
export const UPDATE_BEERS = 'UPDATE_BEERS';
export const SET_ERROR = "SET_ERROR";

export const getData = () => dispatch => {

    dispatch({ type: FETCH_DATA });
    axios.get('https://api.punkapi.com/v2/beers')
        .then(res => {
            console.log(res)
            dispatch({ type: UPDATE_BEERS, payload: res.data });
        })
        .catch(err => {
            console.error('error fetching data from api. err:', err)
            dispatch({type: SET_ERROR, payload: 'error fetching data from api' })
        });

}; 