
import { Auth } from './../api/api';
const stateInitial = {
    id: 0,
    username: "string",
    firstName: "string",
    lastName: "string",
    email: "string",
    password: "string",
    phone: "string",
    userStatus: 0,
    statusAuthorization : false
}

const authReducer = (state = stateInitial, action) => {

    const stateCopy = {
        ...state
    }

    switch (action.type) {
        default:
            return stateCopy;
    }
}

export default authReducer

export const registredThunk = (object) => async(dispatch) => {
    const data = await Auth.Registred(object)

    console.log(data);
    console.log('dfdf');
}