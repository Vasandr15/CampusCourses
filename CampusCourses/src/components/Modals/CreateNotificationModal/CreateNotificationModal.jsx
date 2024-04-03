import {Button, Modal, Input, Space, Typography, Switch} from "antd";
import {useState} from "react";
import styles from '../CreateNotificationModal/statusEditModal.module.css'
import {postCourseNotification} from "../../../API/Course/postCourseNotification.js";
import {useCourse} from "../../../providers/CourseProvider.jsx";
import {useParams} from "react-router-dom";

const {TextArea} = Input
const {Text} = Typography
const CreateNotificationModal = ({isModalOpen, setModalOpen}) =>{
    const [notification, setNotification] = useState('')
    const [isImportant, setIsImportant] = useState(false)
    const {courseId} = useParams()
    const {updateCourseInfo} = useCourse();

    const handleOk = async () =>{
        let response = await postCourseNotification(notification, isImportant, courseId)
        if(response){
            setModalOpen(false)
            updateCourseInfo(courseId)
            //notify
        }
        else{
            //notify
        }
    }

    const handleCancel = () =>{
        setNotification('')
        setModalOpen(false)
    }

    const setNewNotification = (e) =>{
        setNotification(e.target.value)
    }
    const footer = [
        <Button key="back" onClick={handleCancel}>Отменить</Button>,
        <Button type="primary" key="submit" onClick={handleOk}>Сохранить</Button>
    ];

    return(
        <Modal title={"Создание уведомления"} open={isModalOpen} footer={footer} onCancel={handleCancel}>
            <Space direction={"horizontal"} style={{marginBottom: 10}}>
                <Text>Важное уведомление</Text>
                <Switch onChange={(checked) =>  setIsImportant(checked)}/>
            </Space>
            <TextArea showCount maxLength={100} onChange={setNewNotification} value={notification} className={styles.textArea}/>
        </Modal>
    )
}

export default CreateNotificationModal