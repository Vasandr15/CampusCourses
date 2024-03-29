import axios from "axios";

export const putChangeRequirementsAndAnnotations = async (requirements, annotations) =>{
    try{
       let data = {"requirements" : requirements, "annotations" : annotations}
        let courseId = localStorage.getItem("currentCourseId")
        let response = await axios
            .put(`https://camp-courses.api.kreosoft.space/courses/${courseId}/requirements-and-annotations`, data,
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