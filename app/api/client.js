import axios from "axios";

export default axios.create({
    baseURL:'http://192.168.9.43:3000/api'
})