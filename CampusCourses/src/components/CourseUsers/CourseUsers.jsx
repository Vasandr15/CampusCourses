import {Tabs} from "antd";
import Teachers from "./Teachers/Teachers.jsx";
import Students from "./Students/Students.jsx";

const CourseUsers = ({students, teachers}) =>{

    const tabsItems = [
        {label: 'Преподаватели', key: 'teachers', children: <Teachers teachers={teachers}/> },
        {label: 'Студенты', key: 'students', children: <Students students={students}/> }]

    return(
        <Tabs centered items={tabsItems}/>
    )
}

export default CourseUsers;