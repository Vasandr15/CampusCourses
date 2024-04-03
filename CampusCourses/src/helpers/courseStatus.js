import {courseStatus} from "../consts/CourseStatus.js";
import {courseStatusRu} from "../consts/CourseStatusRu.js";

export const getCourseStatus = (status) =>{
    switch (status){
        case courseStatus.created():
            return courseStatusRu.created()
        case courseStatus.started():
            return courseStatusRu.started()
        case courseStatus.openForAssigning():
            return courseStatusRu.openForAssigning()
        case courseStatus.finished():
            return courseStatusRu.finished()
    }
}