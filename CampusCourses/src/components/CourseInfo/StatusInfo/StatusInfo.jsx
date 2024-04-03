import styles from "../StatusInfo/status.module.css";
import {Button, Space, Typography} from "antd";
import CourseStatusEditModal from "../../Modals/CourseStatusEditModal/CourseStatusEditModal.jsx";
import {useState} from "react";
import {useCourse} from "../../../providers/CourseProvider.jsx";
import {getStatusStyle} from "../../../helpers/courseStatusStyle.js";
import {getCourseStatus} from "../../../helpers/courseStatus.js";

const {Text} = Typography
const StatusInfo = ()=>{

    const [isModalOpen, setModalOpen] = useState(false)
    const { courseInfo } = useCourse();
    const onEditClick = () =>{
        setModalOpen(true)
    }

    return(
        <>
            <Space className={styles.status}>
                <Space direction={"vertical"}>
                    <Text strong>Статус курса: </Text>
                    <Text strong style={{color: getStatusStyle(courseInfo.status)}}>{getCourseStatus(courseInfo.status)}</Text>
                </Space>
                <Button onClick={onEditClick}>Изменить статус</Button>
            </Space>
            <CourseStatusEditModal setModalOpen={setModalOpen} isModalOpen={isModalOpen} />
        </>

    )
}

export default StatusInfo