import styles from "../StatusInfo/status.module.css";
import {Button, Space, Typography} from "antd";
import CourseStatusEditModal from "../../Modals/CourseStatusEditModal/CourseStatusEditModal.jsx";
import {useState} from "react";
import {useCourse} from "../../../providers/CourseProvider.jsx";
import {getStatusStyle} from "../../../helpers/courseStatusStyle.js";
import {getCourseStatus} from "../../../helpers/courseStatus.js";
import {connect} from "react-redux";
import {courseStatus} from "../../../consts/CourseStatus.js";
import {postCourseSignUp} from "../../../API/Course/postCourseSignUp.js";
import {useParams} from "react-router-dom";
import {useNotification} from "../../../providers/NotificationProvider.jsx";
import {notificationTypes} from "../../../consts/notificationTypes.js";
import {notificationText} from "../../../consts/notificationText.js";

const {Text} = Typography
const StatusInfo = ({roles, currentCourseRole})=>{
    const [loading, setLoading] = useState(false)
    const [isModalOpen, setModalOpen] = useState(false)
    const { courseInfo, updateCourseInfo } = useCourse();
    const {courseId} = useParams()
    const {notify} = useNotification()

    const onEditClick = () =>{
        setModalOpen(true)
    }

    const signUp = async () =>{
        setLoading(true)
        const response = await postCourseSignUp(courseId);
        setTimeout(() => {
            setLoading(false);
            if (response){
                notify(notificationTypes.success(), notificationText.signUp.Success())
                updateCourseInfo(courseId)
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
                {
                    roles.isAdmin && (
                        <Button onClick={onEditClick}>Изменить статус</Button>
                    )
                }
                {
                    currentCourseRole === null && courseInfo.status === courseStatus.openForAssigning() && (
                        <Button type={"primary"} loading={loading} onClick={signUp}>Записаться</Button>
                    )
                }
            </Space>
            <CourseStatusEditModal setModalOpen={setModalOpen} isModalOpen={isModalOpen} />
        </>

    )
}

const mapStateToProps = (state) => ({
    roles: state.roles.roles,
    currentCourseRole: state.currentCourseRole.currentCourseRole
});

export default connect(mapStateToProps) (StatusInfo);