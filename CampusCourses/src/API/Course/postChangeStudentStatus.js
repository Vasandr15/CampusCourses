import axios from "axios";
import {baseURL} from "../../consts/baseURL.js";
export const postChangeStudentStatus = async (courseId, studentId, status) =>{
    try{
        let data = {"status" : status}
        let response = await axios
            .post(`${baseURL}/courses/${courseId}/student-status/${studentId}`, data,
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