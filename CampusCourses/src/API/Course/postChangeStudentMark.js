import axios from "axios";
import {baseURL} from "../../consts/baseURL.js";

export const postChangeStudentMark = async (studentId, markType, mark, courseId) =>{
    try{
        let data = {"markType" : markType, "mark" : mark}
        let response = await axios
            .post(`${baseURL}/courses/${courseId}/marks/${studentId}`, data,
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