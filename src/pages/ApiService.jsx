import axios from "axios";

const AxiosService = axios.create({
    baseURL:`${import.meta.env.KEY}`,
    headers:{
        "Content-Type":"application/json"
    }
})

export default AxiosService;