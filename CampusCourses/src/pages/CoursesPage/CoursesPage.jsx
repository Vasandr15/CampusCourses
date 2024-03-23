import {Button, Card, Flex, List, Typography} from 'antd'
import {useEffect, useState} from "react";
import {getCourses} from "../../API/getCourses.js";
import ListItem from "../../components/ListItem/ListItem.jsx";
import styles from '../CoursesPage/courses.module.css'

const CoursesPage = () => {
    const [courses, setCourses] = useState([])
    const fetchCourses = async () => {
        let courses = await getCourses(id);
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
        <Flex className={styles.cardContainer}>
            <Card className={styles.card}>
                <Title>Группа - {name}</Title>
                <Button type='primary'>Создать курс</Button>
                <List
                    dataSource={courses}
                    renderItem={(course) => (
                        <List.Item>
                            <ListItem course={course} key={course.id}/>
                        </List.Item>
                    )}
                />
            </Card>
        </Flex>

    )

}

export default CoursesPage;