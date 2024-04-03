import {Button, Popconfirm, Space} from "antd";
import {postChangeStudentStatus} from "../../../../../API/Course/postChangeStudentStatus.js";
import {studentStatuses} from "../../../../../consts/StudentStatuses.js";
import {useCourse} from "../../../../../providers/CourseProvider.jsx";
import {useParams} from "react-router-dom";

const InQueueStudent = ({studentId}) =>{
    const {courseId} = useParams()
    const {updateCourseInfo } = useCourse();
    const changeStudentStatus = async (status) =>{
        let response = await postChangeStudentStatus(courseId, studentId, status)
        if (response){
            //notify success
            updateCourseInfo(courseId)
        }
        else{
            //notify fail
        }
    }

    return(
        <Space direction="horizontal" wrap>
            <Button type="primary" onClick={()=> changeStudentStatus(studentStatuses.Accepted())}>Принять</Button>
            <Popconfirm title={"Отклонить заявку"} description={"Вы уверены, что хотите отклонить заявку студента?"}
                okText={"Да"} cancelText={"Нет"} onConfirm={()=> changeStudentStatus(studentStatuses.Declined())}
            >
                <Button type="primary" danger>Отклонить</Button>
            </Popconfirm>
        </Space>
    )
}

export default InQueueStudent