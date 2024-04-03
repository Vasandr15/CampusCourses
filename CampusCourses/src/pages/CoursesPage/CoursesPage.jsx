import {useEffect, useState} from "react";
import {getCourses} from "../../API/Group/getCourses.js";
import Courses from "../../components/Courses/Courses.jsx";
import { useParams} from "react-router-dom";
import {Button, Card, Flex, Typography} from "antd";
import styles from "./courses.module.css";
import CreateCourseModal from "../../components/Modals/CreateCourseModal/CreateCourseModal.jsx";
import {PlusOutlined} from "@ant-design/icons";

const {Title} = Typography
const CoursesPage = () => {
    const [courses, setCourses] = useState([])
    const { groupId } = useParams();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };
    const fetchCourses = async () => {
        const courses = await getCourses(groupId);
        console.log(groupId)
        if (courses) {
            setCourses(courses)
        } else {
            //notify
        }
    }

    useEffect(() => {
        fetchCourses()
    }, []);

    return (
        <>
            <Flex className={styles.cardContainer}>
                <Card className={styles.card}>
                    <Title>Группа - {name}</Title> {/* как передать имя группы */}
                    <Flex style={{ justifyContent: 'center' }}>
                        <Button onClick={showModal} style={{width: '100%'}} type='primary'>Создать курс <PlusOutlined /></Button> {/* only for admin*/}
                    </Flex>
                    <Courses courses={courses} fetchCourses={fetchCourses} groupId={groupId}/>
                </Card>
            </Flex>
            <CreateCourseModal id={groupId} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} updateCourses={fetchCourses}/>
        </>

    )
}

export default CoursesPage;