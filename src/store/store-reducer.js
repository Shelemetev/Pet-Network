import { Store } from "../api/api";

const SET_DATA = 'set-data-store'
const SET_DATA_STORE_PET = 'set-data-store-pet'

const stateInitial = {
    dataStatus: {

    },
    dataStatusFounding: false,
    dataStorePet: [

    ]
}

const storeReducer = (state = stateInitial, action) => {

    const stateCopy = {
        ...state
    }

    switch (action.type) {
        case SET_DATA :
            stateCopy.dataStatus = {...action.data}
            stateCopy.dataStatusFounding = true
            return stateCopy
        case SET_DATA_STORE_PET:
            stateCopy.dataStorePet = [
                ...state.dataStorePet,
                {...action.object}
            ]
            console.log(stateCopy);
            return stateCopy
        default:
            return stateCopy;
    }

}

export default storeReducer

export const setDataStatus = (data) => ({type:SET_DATA, data:data})

export const setDataStorePet = (object) => ({type:SET_DATA_STORE_PET, object:object})

export const getInventoryThunk = () => async(dispatch) => {
    const data = await Store.GetInventory()

    if(data) {
        dispatch(setDataStatus(data))
    }
}