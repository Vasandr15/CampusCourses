import styles from "../Students/students.module.css";
import {Button, List, Space, Tag, Typography} from "antd";
import StudentListItem from "./StudentListItem/StudentListItem.jsx";

const {Text} = Typography
const Students = ({students}) => {
    return (
        <div className={styles.container}>
            <List dataSource={students}
                  renderItem={(student) => (
                      <List.Item>
                        <StudentListItem student={student}/>
                      </List.Item>
                  )}/>
        </div>
    )
}

export default Students