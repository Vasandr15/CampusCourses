import { getCoursesMy } from "../API/Course/getCoursesMy.js";
import { currentCourseRoles } from "../consts/currentCourseRoles.js";

export const getCurrentCourseUserRole =  async (roles, courseId, teachers, email) => {
    console.log(roles, courseId, teachers, email)
    if (roles.isStudent) {
        const myCourses = await getCoursesMy();
        if (myCourses.some(course => course.id === courseId)) {
            return currentCourseRoles.student();
        }
    } else if (roles.isTeacher && teachers.some(teacher => teacher.email === email)) {
        const mainTeacher = teachers.find(teacher => teacher.email === email && teacher.isMain);
        if (mainTeacher) {
            return currentCourseRoles.mainTeacher();
        } else {
            return currentCourseRoles.teacher();
        }
    }
    return null;
}
