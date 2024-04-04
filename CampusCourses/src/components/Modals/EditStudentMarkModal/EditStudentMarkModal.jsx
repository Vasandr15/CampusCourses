import { Button, Modal, Radio, Space, Typography } from "antd";
import { useState, useEffect } from "react";
import { studentMarks } from "../../../consts/StudentMarks.js";
import { studentMarksRu } from "../../../consts/StudentMarksRu.js";
import { postChangeStudentMark } from "../../../API/Course/postChangeStudentMark.js";
import { getMarkType } from "../../../helpers/getMarkType.js";
import {useCourse} from "../../../providers/CourseProvider.jsx";
import {useParams} from "react-router-dom";
import {useNotification} from "../../../providers/NotificationProvider.jsx";
import {notificationTypes} from "../../../consts/notificationTypes.js";
import {notificationText} from "../../../consts/notificationText.js";

const { Text } = Typography;

const EditStudentMarkModal = ({ isModalOpen, setModalOpen, name, id, currentMark, markType }) => {
    const [newMark, setMark] = useState(currentMark);
    const {updateCourseInfo } = useCourse();
    const {courseId} = useParams()
    const {notify} = useNotification()

    useEffect(() => {
        setMark(currentMark);
    }, [isModalOpen, currentMark]);

    const handleCancel = () => {
        setMark(currentMark);
        setModalOpen(false);
    };

    const handleOk = async () => {
        let response = await postChangeStudentMark(id, markType, newMark, courseId);
        if (response) {
            notify(notificationTypes.success(), notificationText.editStudentMark.Success())
            setModalOpen(false);
            updateCourseInfo(courseId)
        } else {
            notify(notificationTypes.error(), notificationText.editStudentMark.Fail())
        }
    };

    const footer = [
        <Button key="back" onClick={handleCancel}>Отменить</Button>,
        <Button type="primary" key="submit" onClick={handleOk}>Сохранить</Button>
    ];

    return (
        <Modal open={isModalOpen} footer={footer} onCancel={handleCancel} title={`Изменение отметки для "${getMarkType(markType)}"`}>
            <Space direction={"vertical"}>
                <Text>Студент - <Text italic>{name}</Text></Text>
                <Radio.Group onChange={(e) => setMark(e.target.value)} value={newMark}>
                    <Space direction={'horizontal'} wrap>
                        <Radio value={studentMarks.Passed()}>{studentMarksRu.Passed()}</Radio>
                        <Radio value={studentMarks.Failed()}>{studentMarksRu.Failed()}</Radio>
                    </Space>
                </Radio.Group>
            </Space>
        </Modal>
    );
};

export default EditStudentMarkModal;
