import {combineReducers, legacy_createStore as createStore} from "redux"; 
import authReducer from './auth-reducer';


const reducers = combineReducers({
    authData: authReducer
})

const store = createStore(reducers)

export default store