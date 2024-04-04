import axios from "axios";
import {baseURL} from "../../consts/baseURL.js";
import {config} from "../../consts/config.js";

export const postAddTeacher = async (teacher, courseId) =>{
    try{
        let data = {"userId" : teacher}
        let response = await axios
            .post(`${baseURL}/courses/${courseId}/teachers`, data, config);
        console.log(response.data)
        return response.data;
    }
    catch (error){
        console.log(error)
    }
}