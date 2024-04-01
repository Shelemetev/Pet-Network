import { Profile } from "../api/api"
import { stopLoader } from './searching-reducer';
import { Pet } from './../api/api';
import {statusAuthorizationSet} from '../store/auth-reducer'

const SET_DATA = 'set-data-profile'

const stateInitial = {
    data: {

    }
}

const profileReducer = (state = stateInitial, action) => {

    const stateCopy = {
        ...state
    }

    switch (action.type) {
        case SET_DATA:
            stateCopy.data = {...action.data}
            return stateCopy
        default:
            return stateCopy;
    }

}

export default profileReducer

export const setData = (data) => ({type:SET_DATA,data:data})

export const changeDataThunk = (username, object) => async(dispatch) => {

    const data = await Profile.ChangeData(username,object)

    if(data) {
        if (data.code === 200) {
            dispatch(setData(object))
            dispatch(stopLoader())
        }
    }
}

export const deleteUserThunk = (username) => async(dispatch) => {

    const data  = await Profile.DeleteUser(username)

    if (data) {
        if(data.code === 200) {
            dispatch(statusAuthorizationSet(false))
            dispatch(setData({}))
        }
    }
    
}