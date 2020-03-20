import { FETCH_DATA, UPDATE_LIST, SET_ERROR } from '../actions/smurfActions'

export const initialState = {
    smurfList: [],
    isFetching: false,
    error: ""
}

export const smurfReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_DATA:
            return {
                ...state,
                isFetching: true
            }
        case UPDATE_LIST:
            return {
                ...state,
                smurfList: action.payload
            }
        case SET_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}