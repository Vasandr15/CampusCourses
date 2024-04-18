import axios from "axios";
import {baseURL} from "../../consts/baseURL.js";
import {handleAxiosError} from "../../helpers/handleAxiosError.js";

export const putChangeRequirementsAndAnnotations = async (data, courseId) =>{
    try{

        let response = await axios
            .put(`${baseURL}/courses/${courseId}/requirements-and-annotations`, data,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                });
        console.log(response.data)
        return response.data;
    }
    catch (error){
        console.log(error)
        handleAxiosError(error)
    }
}