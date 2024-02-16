export const getStatusAuthorization = (state) => {
    return state.authData.statusAuthorization
}

export const getRegisterStatus = (state) => {
    return state.authData.registerStatus
}

export const getError = (state) => {
    return state.authData.error
}