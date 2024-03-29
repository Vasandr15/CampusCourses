import {Button, Card, Space, Typography} from 'antd'
import {useEffect, useState} from "react";
import {getCourse} from "../../API/Course/getCourse.js";
import styles from './course.module.css'
import CourseInfo from "../../components/CourseInfo/CourseInfo.jsx";
import CourseRequirements from "../../components/CousreRequirements/CourseRequirements.jsx";
import CourseUsers from "../../components/CourseUsers/CourseUsers.jsx";
import RequirementsAndAnnotationsEditModal
    from "../../components/Modals/RequirementsAndAnnotationEditModal/RequirementsAndAnnotationsEditModal.jsx";

const {Title} = Typography
const id = '59101733-350f-4f4c-9320-08dc4e48c3db'
const CoursePage = () => {
    localStorage.setItem('currentCourseId', '59101733-350f-4f4c-9320-08dc4e48c3db')

    const [course, setCourse] = useState({});
    const [isModalOpen, setModalOpen] = useState(false)

    const fetchInfo = async () => {
        const courseInfo = await getCourse(id);
        if (courseInfo) {
            setCourse(courseInfo)
        } else {
            //notify
        }
    }

    const onEditClick = () => {
        setModalOpen(true)
    }


    useEffect(() => {
        fetchInfo()
    }, []);

    return (
        <>
            <div className={styles.cardContainer}>
                <Card className={styles.card}>
                    <Title>{course.name}</Title>
                    <Space className={styles.info}>
                        <Title level={4}>Основные данные курса</Title>
                        <Button onClick={onEditClick}>Редактировать</Button>
                    </Space>
                    <CourseInfo maximumStudentsCount={course.maximumStudentsCount} semester={course.semester}
                                startYear={course.startYear} status={course.status}
                                studentsEnrolledCount={course.studentsEnrolledCount}
                                studentsInQueueCount={course.studentsInQueueCount}/>
                    <CourseRequirements requirements={course.requirements} notifications={course.notifications}
                                        annotations={course.annotations}/>
                    <CourseUsers students={course.students} teachers={course.teachers}/>
                </Card>
            </div>
            <RequirementsAndAnnotationsEditModal isModalOpen={isModalOpen} setModalOpen={setModalOpen}
                                                 annotations={course.annotations} requirements={course.requirements}/>
        </>
    )
}

export default CoursePage;