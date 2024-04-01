import { Pet } from "../api/api";
import { stopLoader } from './searching-reducer';

const SET_DATA_PET = 'set-data-pet'
const UPDATE_DATA_PET = 'update-data-pet'

const stateInitial = {
    dataPet: []
}

const petReducer = (state = stateInitial,action) => {

    const stateCopy = {
        ...state
    }

    switch (action.type) {
        case SET_DATA_PET : 
            stateCopy.dataPet = [
                ...state.dataPet,
                {...action.object}
            ]
            return stateCopy
        case UPDATE_DATA_PET :
            stateCopy.dataPet.map(item => {
                if(item.id === action.object.id) {
                   stateCopy.dataPet[item.id] = action.object
                }
            })
            // for (let index = 0; index < stateCopy.dataPet.length; index++) {
            //     if (stateCopy.dataPet[index].id === action.object.id) {
            //         stateCopy.dataPet[index] = action.object
            //     }
            // }
            // stateCopy.dataPet = [...state.dataPet,{...action.object}]
            console.log(stateCopy.dataPet);
            return stateCopy
        default:
            return stateCopy;
    }

}

export default petReducer

export const setDataPet = (object) => ({type: SET_DATA_PET, object: object})

export const updateDataPet = (object) => ({type: UPDATE_DATA_PET, object: object})

export const addPetThunk = (object) => async(dispatch) => {
    const data = await Pet.AddPet(object)

    if (data) {
        dispatch(stopLoader())
        dispatch(setDataPet(object))
    }
}

export const updatePhotoPetThunk = (photo,id) => async(dispatch) => {
    
    try{
        const data = await Pet.UpdatePhotoPet(photo,id)

        if(data) {
            console.log(data);
            
        }
    } catch (error) {
        console.log(error);
    }
}

export const updatePetDataThunk = (object) => async(dispatch) => {

    
        const data = await Pet.UpdatePetData(object)

        if(data) {
            dispatch(updateDataPet(object))
            dispatch(stopLoader())
        }
    

}