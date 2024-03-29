import { Button, Modal, Radio, Space } from "antd";
import { useState } from "react";
import {postChangeCourseStatus} from "../../../API/Course/postChangeCourseStatus.js";

const CourseStatusEditModal = ({ isModalOpen, setModalOpen, status}) => {
    const [newStatus, setNewStatus] = useState(status);

    const handleOk = async () => {
        let response = await postChangeCourseStatus(newStatus);
        if (response){
            setModalOpen(false)
            //notify
        }
        else{
            //notify
        }
    };

    const handleCancel = () => {
        setModalOpen(false);
        setNewStatus(status)
    };

    const footer = [
        <Button key="back" onClick={handleCancel}>Отменить</Button>,
        <Button type="primary" key="submit" onClick={handleOk}>Сохранить</Button>
    ];

    return (
        <Modal title="Изменение статуса курса" open={isModalOpen} onCancel={handleCancel} footer={footer}>
            <Radio.Group onChange={(e) => setNewStatus(e.target.value)} value={newStatus}>
                <Space wrap direction="vertical">
                    <Radio value="OpenForAssigning">Открыт для записи</Radio>
                    <Radio value="Started">В процессе</Radio>
                    <Radio value="Finished">Завершен</Radio>
                </Space>
            </Radio.Group>
        </Modal>
    );
};

export default CourseStatusEditModal;
