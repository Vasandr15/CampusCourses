import {List} from 'antd'
import ListItem from "../../components/ListItem/ListItem.jsx";

const Courses = ({courses}) => {

    return (
        <List
            dataSource={courses}
            renderItem={(course) => (
                <List.Item>
                    <ListItem course={course} key={course.id}/>
                </List.Item>
            )}
        />
    )
}

export default Courses;