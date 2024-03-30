import { Button, Modal, Radio, Space } from "antd";
import {useEffect, useState} from "react";
import {postChangeCourseStatus} from "../../../API/Course/postChangeCourseStatus.js";
import {useCourse} from "../../../contexts/CourseProvider.jsx";

const CourseStatusEditModal = ({ isModalOpen, setModalOpen}) => {
    const { courseInfo, updateCourseInfo } = useCourse();
    const [newStatus, setNewStatus] = useState(courseInfo.status);

    const handleOk = async () => {
        let response = await postChangeCourseStatus(newStatus);
        if (response){
            setModalOpen(false)
            let courseId = localStorage.getItem("currentCourseId")
            updateCourseInfo(courseId)
            //notify
        }
        else{
            //notify
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
                    <Radio value="OpenForAssigning">Открыт для записи</Radio> {/*change to consts*/}
                    <Radio value="Started">В процессе</Radio> {/*change to consts*/}
                    <Radio value="Finished">Завершен</Radio> {/*change to consts*/}
                </Space>
            </Radio.Group>
        </Modal>
    );
};

export default CourseStatusEditModal;
