import {courseStatus} from "../consts/CourseStatus.js";
import {BLUE, GREEN, GREY, RED} from "../consts/colors.js";

export const getStatusStyle = (status) =>{
    switch (status){
        case courseStatus.created():
            return GREY
        case courseStatus.started():
            return BLUE
        case courseStatus.openForAssigning():
            return GREEN
        case courseStatus.finished():
            return RED
    }
}