import {getCourse} from "../API/Course/getCourse.js";
import {handleAxiosError} from "../helpers/handleAxiosError.js";

export const UPDATE_COURSE_INFO = 'UPDATE_COURSE_INFO'

export const getCourseInfoAction = (courseId) => {
    return async (dispatch) => {
        try {
            const course = await getCourse(courseId);
            if (course) {
                dispatch({
                    type: UPDATE_COURSE_INFO,
                    payload: course
                });
            }
        } catch (error) {
            console.log(error);
            handleAxiosError(error)
        }
    };
};
