import {Button, Card, Space, Typography} from 'antd'
import {useEffect, useState} from "react";
import styles from './course.module.css'
import CourseInfo from "../../components/CourseInfo/CourseInfo.jsx";
import CourseRequirements from "../../components/CousreRequirements/CourseRequirements.jsx";
import CourseUsers from "../../components/CourseUsers/CourseUsers.jsx";
import RequirementsAndAnnotationsEditModal
    from "../../components/Modals/RequirementsAndAnnotationEditModal/RequirementsAndAnnotationsEditModal.jsx";
import {useCourse} from "../../providers/CourseProvider.jsx";
import {useParams} from "react-router-dom";

const {Title} = Typography
const CoursePage = () => {
    const [isModalOpen, setModalOpen] = useState(false)
    const { courseInfo, updateCourseInfo } = useCourse();
    const { courseId } = useParams();

    const fetchInfo = async () => {
        updateCourseInfo(courseId)
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