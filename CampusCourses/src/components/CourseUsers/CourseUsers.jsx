import {Tabs} from "antd";
import Teachers from "./Teachers/Teachers.jsx";
import Students from "./Students/Students.jsx";
import {useSelector} from "react-redux";

const CourseUsers = () =>{
    const  courseInfo  = useSelector(state => state.courseInfo.courseInfo);

    const tabsItems = [
        {label: 'Преподаватели', key: 'teachers', children: <Teachers teachers={courseInfo.teachers}/> },
        {label: 'Студенты', key: 'students', children: <Students students={courseInfo.students}/> }]

    return(
        <Tabs centered items={tabsItems}/>
    )
}

export default CourseUsers;