import {studentMarks} from "../consts/StudentMarks.js";
import {studentMarksRu} from "../consts/StudentMarksRu.js";

export const getStudentMark = (mark) =>{
    switch (mark){
        case  studentMarks.NotDefined():
            return studentMarksRu.NotDefined()
        case studentMarks.Failed():
            return studentMarksRu.Failed()
        case studentMarks.Passed():
            return studentMarksRu.Passed()
    }
}
