import axios from "axios";
import {baseURL} from "../../consts/baseURL.js";
import {handleAxiosError} from "../../helpers/handleAxiosError.js";

export const putEditGroup = async (id, name) =>{

    const body = {"name" : name}

    try{
        const response = await axios.put(`${baseURL}/groups/${id}`, body,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
        console.log(response)
        return response.status;
    }
    catch (error){
        console.log(error)
        handleAxiosError(error)
    }
}