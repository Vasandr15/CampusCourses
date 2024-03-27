import {Card, Typography} from 'antd'
import {useEffect, useState} from "react";
import {getCourse} from "../../API/getCourse.js";
import styles from './course.module.css'
import CourseInfo from "../../components/CourseInfo/CourseInfo.jsx";
import CourseRequirements from "../../components/CousreRequirements/CourseRequirements.jsx";
import CourseUsers from "../../components/CourseUsers/CourseUsers.jsx";

const {Title} = Typography
const id = '59101733-350f-4f4c-9320-08dc4e48c3db'
const CoursePage = () =>{
    localStorage.setItem('currentCourseId','59101733-350f-4f4c-9320-08dc4e48c3db')
    const [course, setCourse] = useState({});

    const fetchInfo = async () =>{
        const courseInfo = await getCourse(id);
        if(courseInfo){
            setCourse(courseInfo)
        }
        else{
            //notify
        }
    }


    useEffect(() => {
        fetchInfo()
    }, []);

    return(
        <div className={styles.cardContainer}>
            <Card className={styles.card}>
                <Title>{course.name}</Title>
                <CourseInfo maximumStudentsCount={course.maximumStudentsCount} semester={course.semester}
                            startYear={course.startYear} status={course.status} studentsEnrolledCount={course.studentsEnrolledCount}
                            studentsInQueueCount={course.studentsInQueueCount}/>
                <CourseRequirements requirements={course.requirements} notifications={course.notifications}
                                    annotations={course.annotations}/>
                <CourseUsers students={course.students} teachers={course.teachers}/>
            </Card>
        </div>

    )
}

export default CoursePage;