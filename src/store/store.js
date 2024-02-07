import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux"; 
import { thunk } from 'redux-thunk'
import authReducer from './auth-reducer';
import searchingReducer from "./searching-reducer";


const reducers = combineReducers({
    authData: authReducer,
    searchingData: searchingReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store