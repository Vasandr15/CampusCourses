import { Button, Modal, Space, Typography } from "antd";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { useState, useEffect } from "react";
import { putChangeRequirementsAndAnnotations } from "../../../API/Course/putChangeRequirementsAndAnnotations.js";
import {useNotification} from "../../../providers/NotificationProvider.jsx";
import {notificationTypes} from "../../../consts/notificationTypes.js";
import {notificationText} from "../../../consts/notificationText.js";
import {useDispatch, useSelector} from "react-redux";
import {getCourseInfoAction} from "../../../actions/getCourseInfoAction.js";
import {useParams} from "react-router-dom";

const { Text } = Typography;

const RequirementsAndAnnotationsEditModal = ({ isModalOpen, setModalOpen}) => {
    const courseInfo= useSelector(state => state.courseInfo.courseInfo);
    const [newRequirements, setNewRequirements] = useState();
    const [newAnnotations, setNewAnnotations] = useState();
    const {courseId} = useParams()
    const {notify} = useNotification()
    const dispatch = useDispatch()

    useEffect(() => {
        setNewRequirements(courseInfo ? courseInfo.requirements : '');
        setNewAnnotations(courseInfo ? courseInfo.annotations : '');
    }, [isModalOpen, courseInfo]);

    const handleCancel = () => {
        setModalOpen(false);
    }

    const handleOk = async () => {
        let response = await putChangeRequirementsAndAnnotations(newRequirements, newAnnotations, courseId);
        if (response) {
            setModalOpen(false);
            dispatch(getCourseInfoAction(courseId))
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
