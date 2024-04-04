import styles from "../Students/students.module.css";
import { List} from "antd";
import StudentListItem from "./StudentListItem/StudentListItem.jsx";

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