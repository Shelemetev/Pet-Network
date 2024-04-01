import axios from "axios";

let inition = axios.create({
    baseURL : 'https://petstore.swagger.io/v2/',
    
})

let initionKey = axios.create({
    baseURL : 'https://petstore.swagger.io/v2/',
    headers : {
        'api-key' : 'b40def35-f67d-451e-ae99-704bd4949cb2'
    }
})

export const Auth = {
    Registred (object) {
        console.log(object);
        return inition.post('user', object).then(response => {return response.data})
    },
    CreateUser (object) {
        return inition.post('user/createUsersWithListInput', [{object}]).then(response => {return response.data})
    },
    Login (object) {
        return inition.get('user/login', {object}).then(response => {return response.data})
    },
    GetData (username) {
        return inition.get(`user/` + username).then(response => {return response.data})
    },
    Logout () {
        return inition.get(`user/logout`).then(response => {return response.data})
    }
}

export const Profile = {
    ChangeData(username,object) {
        return inition.put(`user/${username}`, object).then(response => {return response.data})
    },
    DeleteUser(username) {
        return inition.delete(`user/${username}`).then(response => {return response.data})
    }
}

export const Store = {
    GetInventory() {
        return inition.get('store/inventory').then(response => {return response.data})
    }
}

export const Pet = {
    AddPet(object) {
        return inition.post(`pet`, object).then(response => {return response.data})
    },
    UpdatePhotoPet(photo,id) {
        let formData = new FormData()

        formData.append("file", photo)

        return inition.post(`pet/${id}/uploadFile`, formData ).then(response => {return response.data})
    },
    UpdatePetData(object) {
        return inition.put(`pet`, object).then(response => {return response.data})
    }
}