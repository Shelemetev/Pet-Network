import { Store } from "../api/api";

const SET_DATA = 'set-data-store'

const stateInitial = {
    dataStatus: {

    },
    dataStatusFounding: false
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
        default:
            return stateCopy;
    }

}

export default storeReducer

export const setDataStatus = (data) => ({type:SET_DATA, data:data})

export const getInventoryThunk = () => async(dispatch) => {
    const data = await Store.GetInventory()

    if(data) {
        dispatch(setDataStatus(data))
    }
}