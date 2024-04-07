import {useEffect, useState} from "react";
import {getCourses} from "../../API/Group/getCourses.js";
import Courses from "../../components/Courses/Courses.jsx";
import { useParams} from "react-router-dom";
import {Button, Card, Flex, Typography} from "antd";
import styles from "./courses.module.css";
import CreateCourseModal from "../../components/Modals/CreateCourseModal/CreateCourseModal.jsx";
import {PlusOutlined} from "@ant-design/icons";
import { useSelector} from "react-redux";
import {useNotification} from "../../providers/NotificationProvider.jsx";
import {notificationTypes} from "../../consts/notificationTypes.js";
import {notificationText} from "../../consts/notificationText.js";
import {getGroupName} from "../../helpers/getGroupName.js";

const {Title} = Typography
const CoursesPage = () => {
    const [courses, setCourses] = useState([])
    const [groupName, setGroupName] = useState('')
    const { groupId } = useParams();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {notify} = useNotification()
    const roles = useSelector(state =>state.roles.roles )

    const showModal = () => {
        setIsModalOpen(true);
    };
    const fetchCourses = async () => {
        const courses = await getCourses(groupId);
        const name = await getGroupName(groupId)
        setGroupName(name)
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
                    <Title>Группа - {groupName}</Title>
                    <Flex style={{ justifyContent: 'center' }}>
                        { (roles && roles.isAdmin )&& (
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

export default CoursesPage;