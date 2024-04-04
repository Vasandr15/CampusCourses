import {useEffect, useState} from "react";
import {getCourses} from "../../API/Group/getCourses.js";
import Courses from "../../components/Courses/Courses.jsx";
import { useParams} from "react-router-dom";
import {Button, Card, Flex, Typography} from "antd";
import styles from "./courses.module.css";
import CreateCourseModal from "../../components/Modals/CreateCourseModal/CreateCourseModal.jsx";
import {PlusOutlined} from "@ant-design/icons";
import {connect} from "react-redux";
import {useNotification} from "../../providers/NotificationProvider.jsx";
import {notificationTypes} from "../../consts/notificationTypes.js";
import {notificationText} from "../../consts/notificationText.js";

const {Title} = Typography
const CoursesPage = ({roles}) => {
    const [courses, setCourses] = useState([])
    const { groupId } = useParams();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {notify} = useNotification()

    const showModal = () => {
        setIsModalOpen(true);
    };
    const fetchCourses = async () => {
        const courses = await getCourses(groupId);
        if (courses) {
            setCourses(courses)
        } else {
            notify(notificationTypes.error(), notificationText.pageLoading.Fail())
        }
    }

    useEffect(() => {
        fetchCourses()
    }, []);

    return (
        <>
            <Flex className={styles.cardContainer}>
                <Card className={styles.card}>
                    <Title>Группа - {''}</Title>
                    <Flex style={{ justifyContent: 'center' }}>
                        {roles.isAdmin && (
                            <Button onClick={showModal} style={{width: '100%'}} type='primary'>Создать курс <PlusOutlined /></Button>
                        )}
                    </Flex>
                    <Courses courses={courses} fetchCourses={fetchCourses} groupId={groupId}/>
                </Card>
            </Flex>
            <CreateCourseModal id={groupId} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} updateCourses={fetchCourses}/>
        </>

    )
}

const mapStateToProps = (state) => ({
    roles: state.roles.roles
});

export default connect(mapStateToProps) (CoursesPage);