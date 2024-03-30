import axios from "axios";

export const postChangeCourseStatus = async (status) =>{
    try{
        let data = {"status" : status}
        let courseId = localStorage.getItem("currentCourseId")
        let response = await axios
            .post(`https://camp-courses.api.kreosoft.space/courses/${courseId}/status`, data,
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