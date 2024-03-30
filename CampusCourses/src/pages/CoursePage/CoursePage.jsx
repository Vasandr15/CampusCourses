import {Button, Card, Space, Typography} from 'antd'
import {useEffect, useState} from "react";
import {getCourse} from "../../API/Course/getCourse.js";
import styles from './course.module.css'
import CourseInfo from "../../components/CourseInfo/CourseInfo.jsx";
import CourseRequirements from "../../components/CousreRequirements/CourseRequirements.jsx";
import CourseUsers from "../../components/CourseUsers/CourseUsers.jsx";
import RequirementsAndAnnotationsEditModal
    from "../../components/Modals/RequirementsAndAnnotationEditModal/RequirementsAndAnnotationsEditModal.jsx";
import {useCourse} from "../../contexts/CourseProvider.jsx";

const {Title} = Typography
const id = '59101733-350f-4f4c-9320-08dc4e48c3db'
const CoursePage = () => {
    localStorage.setItem('currentCourseId', '59101733-350f-4f4c-9320-08dc4e48c3db')
    const [isModalOpen, setModalOpen] = useState(false)
    const { courseInfo, updateCourseInfo } = useCourse();

    const fetchInfo = async () => {
        updateCourseInfo(id)
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
                    <Title>{courseInfo.name}</Title>
                    <Space className={styles.info}>
                        <Title level={4}>Основные данные курса</Title>
                        <Button onClick={onEditClick}>Редактировать</Button>
                    </Space>
                    <CourseInfo />
                    <CourseRequirements/>
                    <CourseUsers />
                </Card>
            </div>
            <RequirementsAndAnnotationsEditModal isModalOpen={isModalOpen} setModalOpen={setModalOpen}/>
        </>
    )
}

export default CoursePage;