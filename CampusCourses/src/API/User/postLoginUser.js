import axios from "axios";
import {baseURL} from "../../consts/baseURL.js";

export const postLoginUser =async (userCredentials) =>{
    try{
        let response = await axios.post(`${baseURL}/login`,
            userCredentials);
        console.log(response.data)
        return response.data;
    }
    catch (error){
        console.log(error)
    }
}