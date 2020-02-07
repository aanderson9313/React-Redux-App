export const GET_DATA = 'GET_DATA';

export const getData = () => dispatch => {

    dispatch({ type: GET_DATA });
}; 