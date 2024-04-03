import {useEffect, useState} from "react";
import Courses from "../../components/Courses/Courses.jsx";
import {getCoursesMy} from "../../API/Course/getCoursesMy.js";
import {Card, Flex, Typography} from "antd";
import styles from "../MyCourses/myCourses.module.css";

const {Title} = Typography
const MyCourses = () => {
    const [courses, setCourses] = useState([])

    const fetchCourses = async () => {
        const courses = await getCoursesMy();
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
                    <Title>Мои курсы</Title>
                    <Courses courses={courses} fetchCourses={fetchCourses}/>
                </Card>
            </Flex>
        </>
    )
}

export default MyCourses;