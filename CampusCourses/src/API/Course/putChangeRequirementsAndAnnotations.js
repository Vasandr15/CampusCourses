import axios from "axios";
import {baseURL} from "../../consts/baseURL.js";
import {config} from "../../consts/config.js";

export const putChangeRequirementsAndAnnotations = async (requirements, annotations, courseId) =>{
    try{
       let data = {"requirements" : requirements, "annotations" : annotations}
        let response = await axios
            .put(`${baseURL}/courses/${courseId}/requirements-and-annotations`, data, config);
        console.log(response.data)
        return response.data;
    }
    catch (error){
        console.log(error)
    }
}