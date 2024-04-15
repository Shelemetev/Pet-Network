import { Pet } from "../api/api";
import { stopLoader } from './searching-reducer';

const SET_DATA_PET = 'set-data-pet'
const UPDATE_DATA_PET = 'update-data-pet'
const SET_ID_UPDATE = 'set-id-update'

const stateInitial = {
    dataPet: [],
    idUpdate:false
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
                if(item.id == action.object.id) {
                   item.category.id = action.object.category.id
                   item.category.name = action.object.category.name
                   item.name = action.object.name 
                   item.tags.id = action.object.tags.id
                   item.tags.name = action.object.tags.name
                   console.log(item);
                }    
            })
            stateCopy.idUpdate = true
            console.log(stateCopy.dataPet);
            return stateCopy
        case SET_ID_UPDATE :
            stateCopy.idUpdate = false
            console.log(stateCopy);
            return stateCopy
        default:
            return stateCopy;
    }

}

// id: 0,
// category: {
//     id: 0,
//     name : ''
// },
// name: '',
// photoUrsl: [
//     ''
// ],
// tags:[
//     {
//       id: 0,
//       name: ""
//     }
// ],
// status : "available"

export default petReducer

export const setDataPet = (object) => ({type: SET_DATA_PET, object: object})

export const updateDataPet = (object) => ({type: UPDATE_DATA_PET, object: object})

export const setIdUpdate = () => ({type: SET_ID_UPDATE})

export const addPetThunk = (object) => async(dispatch) => {
    const data = await Pet.AddPet(object)

    if (data) {
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
            dispatch(updateDataPet(data));
            dispatch(stopLoader());
        }
}