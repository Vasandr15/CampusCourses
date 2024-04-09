import {useEffect, useState} from "react";
import Courses from "../../components/Courses/Courses.jsx";
import {getCoursesMy} from "../../API/Course/getCoursesMy.js";
import {Card, Flex, Typography} from "antd";
import styles from "../MyCourses/myCourses.module.css";
import {useNotification} from "../../providers/NotificationProvider.jsx";
import {notificationTypes} from "../../consts/notificationTypes.js";
import {notificationText} from "../../consts/notificationText.js";
import LoadingList from "../../components/LoadingList/LoadingList.jsx";

const {Title} = Typography
const MyCourses = () => {
    const [courses, setCourses] = useState([])
    const {notify} = useNotification()
    const [loading, setLoading] = useState(false)

    const fetchCourses = async () => {
        setLoading(true)
        const courses = await getCoursesMy();
        if (courses) {
            setCourses(courses)
            setLoading(false)
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
                    <Title>Мои курсы</Title>
                    {loading ? <LoadingList length={5} rows={3}/> :
                        <Courses courses={courses} fetchCourses={fetchCourses}/>}
                </Card>
            </Flex>
        </>
    )
}

export default MyCourses;