import axios from "axios";

let inition = axios.create({
    baseURL : 'https://petstore.swagger.io/v2/'
})

export const Auth = {
    Registred (object) {
        return inition.post('user', {object}).then(response => {return response.data})
    }
}