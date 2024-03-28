import {Button, Popconfirm, Space} from "antd";
import {postChangeStudentStatus} from "../../../../../API/postChangeStudentStatus.js";
import {studentStatuses} from "../../../../../consts/StudentStatuses.js";

const InQueueStudent = ({studentId}) =>{
    const courseId = localStorage.getItem('currentCourseId')
    const acceptStudent = async () =>{
        let response = await postChangeStudentStatus(courseId, studentId, studentStatuses.Accepted())
        if (response){
            //notify success
        }
        else{
            //notify fail
        }
    }

    const declineStudent = async () =>{
        let response = await postChangeStudentStatus(courseId, studentId, studentStatuses.Declined())
        if (response){
            //notify success
        }
        else{
            //notify fail
        }
    }

    return(
        <Space direction="horizontal" wrap>
            <Button type="primary" onClick={acceptStudent}>Принять</Button>
            <Popconfirm title={"Отклонить заявку"} description={"Вы уверены, что хотите отклонить заявку студента?"}
                okText={"Да"} cancelText={"Нет"} onConfirm={declineStudent}
            >
                <Button type="primary" danger>Отклонить</Button>
            </Popconfirm>
        </Space>
    )
}

export default InQueueStudent