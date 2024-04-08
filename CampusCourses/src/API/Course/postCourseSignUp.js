import axios from "axios";
import { baseURL } from "../../consts/baseURL.js";
import {handleAxiosError} from "../../helpers/handleAxiosError.js";

export const postCourseSignUp = async (courseId) => {
    try {
        let response = await axios.post(`${baseURL}/courses/${courseId}/sign-up`,[],
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
        console.log(response);
        return response;
    } catch (error) {
        console.log(error);
        handleAxiosError(error)
    }
}
