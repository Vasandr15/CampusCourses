import {Button, Card, Flex, List, Typography} from 'antd'
import {useEffect, useState} from "react";
import {getCourses} from "../../API/getCourses.js";
import ListItem from "../../components/ListItem/ListItem.jsx";
import styles from '../CoursesPage/courses.module.css'
import CreateCourseModal from "../../components/CreateCourseModal/CreateCourseModal.jsx";


const {Title} = Typography

const CoursesPage = () => {
    const [courses, setCourses] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };
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
        <>
            <Flex className={styles.cardContainer}>
                <Card className={styles.card}>
                    <Title>Группа - {name}</Title>
                    <Button onClick={showModal} type='primary'>Создать курс</Button> {/* only for admin*/}
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
            <CreateCourseModal id={id} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} updateCourses={fetchCourses}/>
        </>
    )

}

export default CoursesPage;