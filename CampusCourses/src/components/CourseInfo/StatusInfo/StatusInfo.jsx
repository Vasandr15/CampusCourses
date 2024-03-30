import styles from "../StatusInfo/status.module.css";
import {Button, Space, Typography} from "antd";
import CourseStatusEditModal from "../../Modals/CourseStatusEditModal/CourseStatusEditModal.jsx";
import {useState} from "react";
import {useCourse} from "../../../contexts/CourseProvider.jsx";

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
                    <Text>{courseInfo.status}</Text> {/*add function for getting status in russian and color*/}
                </Space>
                <Button onClick={onEditClick}>Изменить статус</Button>
            </Space>
            <CourseStatusEditModal setModalOpen={setModalOpen} isModalOpen={isModalOpen} status={status} />
        </>

    )
}

export default StatusInfo