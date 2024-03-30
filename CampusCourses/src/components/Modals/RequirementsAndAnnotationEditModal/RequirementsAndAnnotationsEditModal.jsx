import { Button, Modal, Space, Typography } from "antd";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { useState, useEffect } from "react";
import { putChangeRequirementsAndAnnotations } from "../../../API/Course/putChangeRequirementsAndAnnotations.js";
import {useCourse} from "../../../contexts/CourseProvider.jsx";

const { Text } = Typography;

const RequirementsAndAnnotationsEditModal = ({ isModalOpen, setModalOpen}) => {
    const { courseInfo, updateCourseInfo } = useCourse();
    const [newRequirements, setNewRequirements] = useState(courseInfo.requirements);
    const [newAnnotations, setNewAnnotations] = useState(courseInfo.annotations);

    useEffect(() => {
        setNewRequirements(courseInfo.requirements);
        setNewAnnotations(courseInfo.annotations);
    }, [isModalOpen, courseInfo.requirements, courseInfo.annotations]);

    const handleCancel = () => {
        setModalOpen(false);
    }

    const handleOk = async () => {
        let response = await putChangeRequirementsAndAnnotations(newRequirements, newAnnotations);
        if (response) {
            setModalOpen(false);
            const courseId = localStorage.getItem("currentCourseId")
            updateCourseInfo(courseId)
            // Notify success
        } else {
            // Notify failure
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
