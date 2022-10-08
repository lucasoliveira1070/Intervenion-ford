import axios from "axios";

const api = axios.create({
    baseURL:'http://192.168.15.41:3000',
    headers:{
        'Content-Type': 'multipart/form-data'
    }
})

export { api }