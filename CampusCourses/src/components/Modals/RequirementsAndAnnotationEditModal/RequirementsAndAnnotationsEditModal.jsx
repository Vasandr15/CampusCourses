import { Button, Modal, Space, Typography } from "antd";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { useState, useEffect } from "react";
import { putChangeRequirementsAndAnnotations } from "../../../API/Course/putChangeRequirementsAndAnnotations.js";
import {useCourse} from "../../../providers/CourseProvider.jsx";
import {useNotification} from "../../../providers/NotificationProvider.jsx";
import {notificationTypes} from "../../../consts/notificationTypes.js";
import {notificationText} from "../../../consts/notificationText.js";

const { Text } = Typography;

const RequirementsAndAnnotationsEditModal = ({ isModalOpen, setModalOpen}) => {
    const { courseInfo, updateCourseInfo } = useCourse();
    const [newRequirements, setNewRequirements] = useState(courseInfo.requirements);
    const [newAnnotations, setNewAnnotations] = useState(courseInfo.annotations);
    const {courseId} = useCourse()
    const {notify} = useNotification()

    useEffect(() => {
        setNewRequirements(courseInfo.requirements);
        setNewAnnotations(courseInfo.annotations);
    }, [isModalOpen, courseInfo.requirements, courseInfo.annotations]);

    const handleCancel = () => {
        setModalOpen(false);
    }

    const handleOk = async () => {
        let response = await putChangeRequirementsAndAnnotations(newRequirements, newAnnotations, courseId);
        if (response) {
            setModalOpen(false);
            updateCourseInfo(courseId)
            notify(notificationTypes.success(), notificationText.editRequirementsAndAnnotations.Success())
        } else {
            notify(notificationTypes.error(), notificationText.editRequirementsAndAnnotations.Fail())
        }
    }

    const footer = [
        <Button key={"back"} onClick={handleCancel}>Отменить</Button>,
        <Button type={"primary"} key={"submit"} onClick={handleOk}>Сохранить</Button>
    ];

    return (
        <Modal width={750} title={'Редактирование курса'} open={isModalOpen} footer={footer} onCancel={handleCancel}>
            <Space direction={"vertical"}>
                <Text>Требования</Text>
                <ReactQuill theme={"snow"} onChange={setNewRequirements} value={newRequirements} />
                <Text>Аннотации</Text>
                <ReactQuill theme={"snow"} onChange={setNewAnnotations} value={newAnnotations} />
            </Space>
        </Modal>
    );
}

export default RequirementsAndAnnotationsEditModal;
