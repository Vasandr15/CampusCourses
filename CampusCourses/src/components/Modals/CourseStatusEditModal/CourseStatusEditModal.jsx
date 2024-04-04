import { Button, Modal, Radio, Space } from "antd";
import {useEffect, useState} from "react";
import {postChangeCourseStatus} from "../../../API/Course/postChangeCourseStatus.js";
import {useCourse} from "../../../providers/CourseProvider.jsx";
import {useParams} from "react-router-dom";
import {courseStatus} from "../../../consts/CourseStatus.js";
import {useNotification} from "../../../providers/NotificationProvider.jsx";
import {notificationTypes} from "../../../consts/notificationTypes.js";
import {notificationText} from "../../../consts/notificationText.js";

const CourseStatusEditModal = ({ isModalOpen, setModalOpen}) => {
    const { courseInfo, updateCourseInfo } = useCourse();
    const [newStatus, setNewStatus] = useState(courseInfo.status);
    const {courseId} = useParams()
    const {notify} = useNotification()

    const handleOk = async () => {
        let response = await postChangeCourseStatus(newStatus, courseId);
        if (response){
            setModalOpen(false)
            updateCourseInfo(courseId)
            notify(notificationTypes.success(),notificationText.editCourseStatus.Success() )
        }
        else{
            notify(notificationTypes.error(), notificationText.editCourseStatus.Fail())
            setNewStatus(courseInfo.status)
        }
    };
    useEffect(() => {
        setNewStatus(courseInfo.status);
    }, [courseInfo.status]);
    const handleCancel = () => {
        setModalOpen(false);
        setNewStatus(courseInfo.status)
    };

    const footer = [
        <Button key="back" onClick={handleCancel}>Отменить</Button>,
        <Button type="primary" key="submit" onClick={handleOk}>Сохранить</Button>
    ];

    return (
        <Modal title="Изменение статуса курса" open={isModalOpen} onCancel={handleCancel} footer={footer}>
            <Radio.Group onChange={(e) => setNewStatus(e.target.value)} value={newStatus}>
                <Space wrap direction="vertical">
                    <Radio value={courseStatus.openForAssigning()}>Открыт для записи</Radio>
                    <Radio value={courseStatus.started()}>В процессе</Radio>
                    <Radio value={courseStatus.finished()}>Завершен</Radio>
                </Space>
            </Radio.Group>
        </Modal>
    );
};

export default CourseStatusEditModal;
