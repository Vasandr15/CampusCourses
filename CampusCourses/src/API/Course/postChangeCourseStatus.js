import axios from "axios";
import {baseURL} from "../../consts/baseURL.js";
import {config} from "../../consts/config.js";

export const postChangeCourseStatus = async (status, courseId) =>{
    try{
        let data = {"status" : status}
        let response = await axios
            .post(`${baseURL}/courses/${courseId}/status`, data, config);
        console.log(response.data)
        return response.data;
    }
    catch (error){
        console.log(error)
    }
}