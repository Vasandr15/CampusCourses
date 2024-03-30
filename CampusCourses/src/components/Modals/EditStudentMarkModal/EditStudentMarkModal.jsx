import { Button, Modal, Radio, Space, Typography } from "antd";
import { useState, useEffect } from "react";
import { studentMarks } from "../../../consts/StudentMarks.js";
import { studentMarksRu } from "../../../consts/StudentMarksRu.js";
import { postChangeStudentMark } from "../../../API/Course/postChangeStudentMark.js";
import { getMarkType } from "../../../helpers/getMarkType.js";
import {useCourse} from "../../../contexts/CourseProvider.jsx";

const { Text } = Typography;

const EditStudentMarkModal = ({ isModalOpen, setModalOpen, name, id, currentMark, markType }) => {
    const [newMark, setMark] = useState(currentMark);
    const { courseInfo, updateCourseInfo } = useCourse();

    useEffect(() => {
        setMark(currentMark);
    }, [isModalOpen, currentMark]);

    const handleCancel = () => {
        setMark(currentMark);
        setModalOpen(false);
    };

    const handleOk = async () => {
        let response = await postChangeStudentMark(id, markType, newMark);
        if (response) {
            //notify
            setModalOpen(false);
            let courseId = localStorage.getItem("currentCourseId")
            updateCourseInfo(courseId)
        } else {
            //notify
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
