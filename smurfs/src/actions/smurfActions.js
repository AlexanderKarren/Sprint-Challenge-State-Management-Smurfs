import axios from 'axios';

export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_LIST = "UPDATE_LIST";
export const SET_ERROR = "SET_ERROR";

export const getData = () => dispatch => {
    dispatch({ type: FETCH_DATA });
    axios.get("http://localhost:3333/smurfs")
    .then(response => {
        console.log(response.data);
        dispatch({ type: UPDATE_LIST, payload: response.data});
    })
    .catch(error => {
        console.log(error);
        dispatch({ type: SET_ERROR, payload: error });
    })
}

export const addSmurf = smurf => dispatch => {
    axios.post("http://localhost:3333/smurfs", smurf)
    .then(response => {
        console.log(response);
        dispatch({ type: UPDATE_LIST, payload: response.data});
    })
    .catch(error => {
        console.log(error);
    })
}

export const removeSmurf = smurfID => dispatch => {
    axios.delete(`http://localhost:3333/smurfs/${smurfID}`)
    .then(response => {
        console.log(response);
        dispatch({ type: UPDATE_LIST, payload: response.data})
    })
    .catch(error => {
        console.log(error);
    })
}