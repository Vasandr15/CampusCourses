import {semesters} from "../consts/Semesters.js";
import {semestersRu} from "../consts/SemestersRu.js";

export const getCourseSemester = (semester) => {
    switch (semester){
        case semesters.autumn():
            return semestersRu.autumn()
        case semesters.spring():
            return semestersRu.spring()
    }
}