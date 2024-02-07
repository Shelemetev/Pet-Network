import { Auth } from './../api/api';
import { stopLoader } from './searching-reducer';

const REGISTER_STATUS_SET = 'register-status-set'

const stateInitial = {
    data: {
        id: 0,
        username: "string",
        firstName: "string",
        lastName: "string",
        email: "string",
        password: "string",
        phone: "string",
        userStatus: 0
    },
    statusAuthorization : false,
    registerStatus : ''   
}

const authReducer = (state = stateInitial, action) => {

    const stateCopy = {
        ...state
    }

    switch (action.type) {
        case REGISTER_STATUS_SET:
            stateCopy.registerStatus = action.bolean
            return stateCopy
        default:
            return stateCopy;
    }
}

export default authReducer

const registerStatusSet = (bolean) => ({type:REGISTER_STATUS_SET, bolean:bolean}) 

export const registredThunk = (object) => async(dispatch) => {
    const data = await Auth.Registred(object)

    if(data) {
        if(data.code === 200) {
            dispatch(registerStatusSet(true))
            dispatch(stopLoader())
        } else {
            dispatch(registerStatusSet(false))
            dispatch(stopLoader())
        }
    }
    
}