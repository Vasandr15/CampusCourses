import {studentMarks} from "../consts/StudentMarks.js";

export const getTagMarkColor = (mark) =>{
    switch (mark){
        case studentMarks.NotDefined():
            return 'rgba(213,213,213,0.49)'
        case studentMarks.Failed():
            return 'rgb(248,75,75)'
        case studentMarks.Passed():
            return 'rgba(46,157,56,0.98)'
    }
}