import { USER_SIGNIN_ATTEMPT, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAILED, USER_SIGNOUT_SUCCESS} from '../Constants/userConst';

function authReducer(state = {}, action) {
    switch (action.type) {
        case USER_SIGNIN_ATTEMPT:{
            return {
                logging: true,
                user: null
            }
        }
        case USER_SIGNIN_SUCCESS:{
            return {
                logging: false,
                loggedin: true,
                user: action.payload
            }
        }
        case USER_SIGNIN_FAILED:{
            return {
                logging: false,
                loggedin: false,
                error: action.payload
            }
        }
        case USER_SIGNOUT_SUCCESS:{
            return {
                loggedin: false,
                user: null,
                error: null
            }
        }
        default: return state;
    }
}
export {authReducer};