import styles from "../StatusInfo/status.module.css";
import {Button, Space, Typography} from "antd";
import CourseStatusEditModal from "../../Modals/CourseStatusEditModal/CourseStatusEditModal.jsx";
import {useState} from "react";

const {Text} = Typography
const StatusInfo = ({status})=>{

    const [isModalOpen, setModalOpen] = useState(false)

    const onEditClick = () =>{
        setModalOpen(true)
    }

    return(
        <>
            <Space className={styles.status}>
                <Space direction={"vertical"}>
                    <Text strong>Статус курса: </Text>
                    <Text>{status}</Text> {/*add function for getting status in russian and color*/}
                </Space>
                <Button onClick={onEditClick}>Изменить статус</Button>
            </Space>
            <CourseStatusEditModal setModalOpen={setModalOpen} isModalOpen={isModalOpen} status={status} />
        </>

    )
}

export default StatusInfo