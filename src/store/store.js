import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux"; 
import { thunk } from 'redux-thunk'
import authReducer from './auth-reducer';
import searchingReducer from "./searching-reducer";
import profileReducer from './profile-reducer';
import storeReducer from "./store-reducer";
import petReducer from "./pet-reducer";


const reducers = combineReducers({
    authData: authReducer,
    searchingData: searchingReducer,
    profileData : profileReducer,
    storeData : storeReducer,
    petData : petReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store