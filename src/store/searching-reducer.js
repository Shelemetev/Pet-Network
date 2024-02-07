

const START_LOADER = 'start-loader'
const STOP_LOADER = 'stop-loader'

const stateInitial = {
    toSearching: false
}

const searchingReducer = (state = stateInitial, action) => {

    let stateCopy = {
        ...state
    }

    switch (action.type) {
        case START_LOADER: 
            stateCopy.toSearching = true
            return stateCopy
        case STOP_LOADER: 
            stateCopy.toSearching = false
            return stateCopy    
        default:
            return stateCopy;
    }
}

export default searchingReducer

export const startLoader = () => ({type:START_LOADER})

export const stopLoader = () => ({type:STOP_LOADER})

