import {studentStatuses} from "../consts/StudentStatuses.js";
import {studentStatusesRu} from "../consts/StudentStatusesRu.js";

export const getStudentStatus =(status)=>{
    switch (status){
        case studentStatuses.InQueue():
            return studentStatusesRu.InQueue()
        case studentStatuses.Accepted():
            return studentStatusesRu.Accepted()
        case studentStatuses.Declined():
            return studentStatusesRu.Declined()
    }
}