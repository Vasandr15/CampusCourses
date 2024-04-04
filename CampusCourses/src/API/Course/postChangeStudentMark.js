import axios from "axios";
import {baseURL} from "../../consts/baseURL.js";
import {config} from "../../consts/config.js";

export const postChangeStudentMark = async (studentId, markType, mark, courseId) =>{
    try{
        let data = {"markType" : markType, "mark" : mark}
        let response = await axios
            .post(`${baseURL}/courses/${courseId}/marks/${studentId}`, data, config);
        console.log(response.data)
        return response.data;
    }
    catch (error){
        console.log(error)
    }
}