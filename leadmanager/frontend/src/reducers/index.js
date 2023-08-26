import {combineReducers} from 'redux';
import  leads from './leads';
import auth from './auth';
import errors from './errors';
export default combineReducers({
    leads,
    auth,
    errors,
});


