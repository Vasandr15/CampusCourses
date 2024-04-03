import axios from "axios";
import {baseURL} from "../../consts/baseURL.js";

export const putChangeRequirementsAndAnnotations = async (requirements, annotations, courseId) =>{
    try{
       let data = {"requirements" : requirements, "annotations" : annotations}
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
    }
}