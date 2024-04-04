import {useEffect, useState} from "react";
import Courses from "../../components/Courses/Courses.jsx";
import {Card, Flex, Typography} from "antd";
import styles from "../MyCourses/myCourses.module.css";
import {getTeachingCourses} from "../../API/Course/getTeachingCourses.js";
import {useNotification} from "../../providers/NotificationProvider.jsx";
import {notificationTypes} from "../../consts/notificationTypes.js";
import {notificationText} from "../../consts/notificationText.js";

const {Title} = Typography
const MyCourses = () => {
    const [courses, setCourses] = useState([])
    const {notify} = useNotification();

    const fetchCourses = async () => {
        const courses = await getTeachingCourses();
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
                    <Title>Преподаваемые курсы</Title>
                    <Courses courses={courses} fetchCourses={fetchCourses}/>
                </Card>
            </Flex>
        </>
    )
}

export default MyCourses;