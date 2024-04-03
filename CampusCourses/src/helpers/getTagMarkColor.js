import {studentMarks} from "../consts/StudentMarks.js";
import {GREEN, GREY, RED} from "../consts/colors.js";

export const getTagMarkColor = (mark) =>{
    switch (mark){
        case studentMarks.NotDefined():
            return GREY
        case studentMarks.Failed():
            return RED
        case studentMarks.Passed():
            return GREEN
    }
}