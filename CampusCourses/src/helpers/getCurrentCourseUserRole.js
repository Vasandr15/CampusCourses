import { getCoursesMy } from "../API/Course/getCoursesMy.js";
import { currentCourseRoles } from "../consts/currentCourseRoles.js";

export const getCurrentCourseUserRole =  async (roles, courseId, teachers, email) => {
    console.log(roles, courseId, teachers, email)
    if (roles && courseId && teachers && email){
        if (roles.isStudent) {
            const myCourses = await getCoursesMy();
            if (myCourses.some(course => course.id === courseId)) {
                return currentCourseRoles.student();
            }
        }
        if (roles.isTeacher) {
            const teacher = teachers.find(teacher => teacher.email === email)
            console.log(teacher)
            if (teacher){
                if (teacher.isMain) {
                    return currentCourseRoles.mainTeacher();
                } else {
                    return currentCourseRoles.teacher();
                }
            }
        }
        return currentCourseRoles.none();
    }
}
