import Axios from "axios";
import { USER_SIGNIN_ATTEMPT, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAILED, USER_SIGNOUT_SUCCESS} from '../Constants/userConst';
import {history} from '../history';
import Cookie from 'js-cookie';

const signin = (username, password) => async (dispatch) => {
    dispatch({type: USER_SIGNIN_ATTEMPT, payload: {username, password}});
    try {
        console.log(username)
        const user = await Axios.post("https://eamobileisrael.com/login", {username,password});
        console.log(JSON.stringify(user.data.token));
        Cookie.set('userInstance', JSON.stringify(user.data.token));
        history.push('/eaadmin');
        dispatch({type: USER_SIGNIN_SUCCESS, payload: user});
        return true;
    }
    catch (err) {
        dispatch({type: USER_SIGNIN_FAILED, payload: err});
        return false;
    }
    return false;
}

const signout = () => (dispatch) => {
    history.push('/');
    dispatch({type: USER_SIGNOUT_SUCCESS});
}

const updateposts = (jsonData) => async (dispatch) => {
    try {
        const response = await Axios.post("https://eamobileisrael.com/updateposts", {jsonData});
        console.log(jsonData)
        console.log(JSON.stringify(response));
        return true;
    }
    catch (err) {
        return false;
    }
    return false;
}


export {signin, signout, updateposts};