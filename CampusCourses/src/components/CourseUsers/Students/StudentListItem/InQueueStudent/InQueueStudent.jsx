import {Button, Popconfirm, Space} from "antd";
import {postChangeStudentStatus} from "../../../../../API/Course/postChangeStudentStatus.js";
import {studentStatuses} from "../../../../../consts/StudentStatuses.js";
import {useParams} from "react-router-dom";
import {useNotification} from "../../../../../providers/NotificationProvider.jsx";
import {notificationTypes} from "../../../../../consts/notificationTypes.js";
import {notificationText} from "../../../../../consts/notificationText.js";
import {useDispatch} from "react-redux";
import {getCourseInfoAction} from "../../../../../actions/getCourseInfoAction.js";

const InQueueStudent = ({studentId}) =>{
    const {courseId} = useParams()
    const dispatch = useDispatch()
    const {notify} = useNotification()

    const changeStudentStatus = async (status) =>{
        let response = await postChangeStudentStatus(courseId, studentId, status)
        if (response){
            notify(notificationTypes.success(), notificationText.changeStudentStatus.Success())
            dispatch(getCourseInfoAction(courseId))
        }
        else{
            notify(notificationTypes.error(), notificationText.changeStudentStatus.Fail())
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