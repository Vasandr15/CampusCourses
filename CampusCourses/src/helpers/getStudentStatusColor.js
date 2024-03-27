import {studentStatuses} from "../consts/StudentStatuses.js";

export const getStudentStatusColor = (status)=>{
    switch (status){
        case studentStatuses.InQueue():
            return 'rgb(12,89,255)'
        case studentStatuses.Accepted():
            return 'rgba(46,157,56,0.98)'
        case studentStatuses.Declined():
            return 'rgb(248,75,75)'

    }

}
