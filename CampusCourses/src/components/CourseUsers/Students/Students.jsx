import styles from "../Students/students.module.css";
import {List} from "antd";
import StudentListItem from "./StudentListItem/StudentListItem.jsx";
import {useSelector} from "react-redux";
import LoadingList from "../../LoadingList/LoadingList.jsx";

const Students = ({students}) => {
    const isLoading = useSelector(state => state.isLoading.isLoading)

    return (
        <div className={styles.container}>
            {isLoading ? <LoadingList rows={1} length={5}/> :
                <List dataSource={students}
                      renderItem={(student) => (
                          <List.Item>
                              <StudentListItem student={student}/>
                          </List.Item>
                      )}/>}
        </div>
    )
}

export default Students