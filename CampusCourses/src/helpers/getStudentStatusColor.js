import {studentStatuses} from "../consts/StudentStatuses.js";
import {BLUE, GREEN, RED} from "../consts/colors.js";

export const getStudentStatusColor = (status)=>{
    switch (status){
        case studentStatuses.InQueue():
            return BLUE
        case studentStatuses.Accepted():
            return GREEN
        case studentStatuses.Declined():
            return RED
    }
}
