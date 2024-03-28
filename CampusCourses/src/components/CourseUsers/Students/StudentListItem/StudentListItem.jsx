import styles from "../StudentListItem/stidentListItem.module.css";
import {Button, Space, Typography} from "antd";
import AcceptedStudent from "./AcceptedStudent/AcceptedStudent.jsx";
import {studentStatuses} from "../../../../consts/StudentStatuses.js";
import {getStudentStatus} from "../../../../helpers/getStudentStatus.js";
import {getStudentStatusColor} from "../../../../helpers/getStudentStatusColor.js";
import InQueueStudent from "./InQueueStudent/InQueueStudent.jsx";

const {Text} = Typography
const StudentListItem = ({student}) =>{
    return(
        <Space className={styles.listItem}>

            <Space direction={"vertical"}>
                <Text>{student.name}</Text>
                <Text type={"secondary"}>Статус -
                    <Text style={{color: getStudentStatusColor(student.status)}}> {getStudentStatus(student.status)}</Text>
                </Text>
                <Text type={"secondary"}>{student.email}</Text>
            </Space>
            {student.status === studentStatuses.InQueue() && (
                <InQueueStudent studentId={student.id}/>
            )}
            {student.status === studentStatuses.Accepted() && (
                <AcceptedStudent id={student.id} finalResult={student.finalResult} midtermResult={student.midtermResult}/>
            )}
        </Space>
    )
}

export default StudentListItem