import {GET_DATA} from '../actions';

const initialState = {
    
    Beers: [],
    isFetchingData: false
};


export const beerReducer =(state = initialState, action) => {

    switch (action.type) {

        case GET_DATA:
            return {
                ...state,

                isFetchingData: true
            };
        default: 
            return state;
        }
}; 