import {Button, Form, Modal, Space, Typography} from "antd";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { useState, useEffect } from "react";
import { putChangeRequirementsAndAnnotations } from "../../../API/Course/putChangeRequirementsAndAnnotations.js";
import { useNotification } from "../../../providers/NotificationProvider.jsx";
import { notificationTypes } from "../../../consts/notificationTypes.js";
import { notificationText } from "../../../consts/notificationText.js";
import { useDispatch, useSelector } from "react-redux";
import { getCourseInfoAction } from "../../../actions/getCourseInfoAction.js";
import { useParams } from "react-router-dom";
import {ToolBar} from "../../../consts/CustomToolbar.js";

const { Text } = Typography;

const RequirementsAndAnnotationsEditModal = ({ isModalOpen, setModalOpen }) => {
    const courseInfo = useSelector(state => state.courseInfo.courseInfo);
    const { courseId } = useParams();
    const { notify } = useNotification();
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();
    const dispatch = useDispatch();

    useEffect(() => {
        if (courseInfo) {
            form.setFieldsValue({
                requirements: courseInfo.requirements,
                annotations: courseInfo.annotations
            });
        }
    }, [courseInfo, form]);

    const handleCancel = () => {
        setModalOpen(false);
        form.setFieldsValue({
            requirements: courseInfo.requirements,
            annotations: courseInfo.annotations
        });
    }
    const onFinish = async (values) =>{
        let response = await putChangeRequirementsAndAnnotations(values, courseId);
        if (response) {
            setModalOpen(false);
            dispatch(getCourseInfoAction(courseId))
            notify(notificationTypes.success(), notificationText.editRequirementsAndAnnotations.Success())
        } else {
            notify(notificationTypes.error(), notificationText.editRequirementsAndAnnotations.Fail())
        }
    }

    const handleOk = async () => {
        form.submit();
    }

    const footer = [
        <Button key={"back"} onClick={handleCancel}>Отменить</Button>,
        <Button type={"primary"} key={"submit"} onClick={handleOk}>Сохранить</Button>
    ];

    return (
        <Modal width={750} title={'Редактирование курса'} open={isModalOpen} footer={footer} onCancel={handleCancel}>
            <Form name="courseEdit" form={form} onFinish={onFinish} layout="vertical">
                <Form.Item name={"requirements"} label={"Требования"}>
                    <ReactQuill modules={{toolbar: ToolBar}} theme={"snow"}/>
                </Form.Item>
                <Form.Item name={"annotations"} label={"Аннотации"}>
                    <ReactQuill modules={{toolbar: ToolBar}} theme={"snow"} />
                </Form.Item>
            </Form>
        </Modal>
    );
}

export default RequirementsAndAnnotationsEditModal;
