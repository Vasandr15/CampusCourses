import axios from "axios";
import {baseURL} from "../../consts/baseURL.js";
import {handleAxiosError} from "../../helpers/handleAxiosError.js";

export const postLogout =async () =>{
    try{
        let response = await axios.post(`${baseURL}/logout`, [],
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
        console.log(response)
        return response;
    }
    catch (error){
        console.log(error)
        handleAxiosError(error)
    }
}