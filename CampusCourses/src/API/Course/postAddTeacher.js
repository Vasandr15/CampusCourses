import axios from "axios";

export const postAddTeacher = async (teacher) =>{
    try{
        let data = {"userId" : teacher}
        let courseId = localStorage.getItem("currentCourseId")
        let response = await axios
            .post(`https://camp-courses.api.kreosoft.space/courses/${courseId}/teachers`, data,
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