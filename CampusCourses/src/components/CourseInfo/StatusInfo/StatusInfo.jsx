import styles from "../StatusInfo/status.module.css";
import {Button, Space, Typography} from "antd";
import CourseStatusEditModal from "../../Modals/CourseStatusEditModal/CourseStatusEditModal.jsx";
import {useState} from "react";
import {getStatusStyle} from "../../../helpers/courseStatusStyle.js";
import {getCourseStatus} from "../../../helpers/courseStatus.js";
import {useDispatch, useSelector} from "react-redux";
import {courseStatus} from "../../../consts/CourseStatus.js";
import {postCourseSignUp} from "../../../API/Course/postCourseSignUp.js";
import {useParams} from "react-router-dom";
import {useNotification} from "../../../providers/NotificationProvider.jsx";
import {notificationTypes} from "../../../consts/notificationTypes.js";
import {notificationText} from "../../../consts/notificationText.js";
import {currentCourseRoles} from "../../../consts/currentCourseRoles.js";
import {setCurrentCourseUserRole} from "../../../actions/currentCourseUserRoleAction.js";
import {getCourseInfoAction} from "../../../actions/getCourseInfoAction.js";

const {Text} = Typography
const StatusInfo = ()=>{
    const [loading, setLoading] = useState(false)
    const [isModalOpen, setModalOpen] = useState(false)
    const courseInfo = useSelector(state => state.courseInfo.courseInfo)
    const {courseId} = useParams()
    const {notify} = useNotification()
    const dispatch = useDispatch()
    const roles = useSelector(state => state.roles.roles )
    const currentCourseRole = useSelector(state => state.currentCourseRole.currentCourseRole)

    const onEditClick = () =>{
        setModalOpen(true)
    }

    const signUp = async () =>{
        setLoading(true)
        const response = await postCourseSignUp(courseId);
        setTimeout(() => {
            setLoading(false);
            if (response.status === 200){
                notify(notificationTypes.success(), notificationText.signUp.Success())
                dispatch(getCourseInfoAction(courseId))
                dispatch(setCurrentCourseUserRole(currentCourseRoles.student()))
            }
            else{
                notify(notificationTypes.error(), notificationText.signUp.Fail())
            }
        }, 500);
    }


    return(
        <>
            <Space className={styles.status}>
                <Space direction={"vertical"}>
                    <Text strong>Статус курса: </Text>
                    <Text strong style={{color: getStatusStyle(courseInfo.status)}}>{getCourseStatus(courseInfo.status)}</Text>
                </Space>
                <Space direction={"horizontal"}>
                    {
                        roles && roles.isAdmin && currentCourseRole !== currentCourseRoles.student() && (
                            <Button onClick={onEditClick}>Изменить статус</Button>
                        )
                    }
                    {
                        currentCourseRole === currentCourseRoles.none() && courseInfo.status === courseStatus.openForAssigning() && (
                            <Button type={"primary"} loading={loading} onClick={signUp}>Записаться</Button>
                        )
                    }
                </Space>
            </Space>
            <CourseStatusEditModal setModalOpen={setModalOpen} isModalOpen={isModalOpen} />
        </>

    )
}
export default StatusInfo;