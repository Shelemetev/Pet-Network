import { Auth } from './../api/api';
import { stopLoader } from './searching-reducer';

const REGISTER_STATUS_SET = 'register-status-set'
const STATUS_AUTORIZATION_SET = 'status-autorization-set'
const SET_DATA = 'set-data'
const SET_ERROR = 'set-error'

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
    registerStatus : false,
    error:''   
}

const authReducer = (state = stateInitial, action) => {

    const stateCopy = {
        ...state
    }

    switch (action.type) {
        case REGISTER_STATUS_SET:
            stateCopy.registerStatus = action.bolean
            return stateCopy
        case STATUS_AUTORIZATION_SET:
            stateCopy.statusAuthorization = action.bolean
            return stateCopy
        case SET_DATA: 
            stateCopy.data = {...action.data}  
            return stateCopy  
        case SET_ERROR:
            stateCopy.error = action.error
            return stateCopy 
        default:
            return stateCopy;
    }
}

export default authReducer

const registerStatusSet = (bolean) => ({type:REGISTER_STATUS_SET, bolean:bolean}) 

const statusAuthorizationSet = (bolean) => ({type: STATUS_AUTORIZATION_SET,bolean:bolean}) 

const setData = (data) => ({type:SET_DATA,data:data})

const setError = (error) => ({type:SET_ERROR,error:error})

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

export const loginThunk = (object) => async(dispatch) => {
    try {
        const data = await Auth.Login(object)

        if(data) {
            if(data.code === 200) {
                dispatch(getDataThunk(object.username,object.password))
            } 
        }
    } catch(error) {
        
    }
}

export const getDataThunk = (username,password) => async(dispatch) => {  
    try {
        const data = await Auth.GetData(username)

        if(data ) {
            if (data.password === password) {
                console.log(data);
                dispatch(setData(data)) 
                dispatch(statusAuthorizationSet(true))
            }
        } 
    } catch(error) {
        dispatch(setError(error.response.data.message))
    }
}