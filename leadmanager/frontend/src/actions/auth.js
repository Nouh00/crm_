import axios from 'axios';
import { returnErrors } from './messages';


import { USER_LOADED, AUTH_ERROR, USER_LOADING, LOGIN_SUCCESS, LOGIN_FAIL } from './types';


//check token and load user

export const loadUser = () => (dispatch, getState) => {
    dispatch({ type: USER_LOADING });

    //get token
    const token = getState().auth.token;

    //headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    //if thers token. add to header
    if (token) {
        config.headers['Authorization'] = `Token ${token}`; 
    }
    
    axios.get('/api/auth/user', config).then(res => {
        dispatch({
            type: USER_LOADED,
            payload: res.data
        });
    }).catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
            type: AUTH_ERROR,
          });
    })
}

export const login  = (username, password) => (dispatch) => {


    //headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    //reqeust body
    const  body = JSON.stringify({ username, password });
    
    axios.post('/api/auth/login', body, config).then(res => {
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });
    }).catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
            type: LOGIN_FAIL
        })
    })
}