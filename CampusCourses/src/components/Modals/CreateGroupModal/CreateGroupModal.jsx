import { Modal, Button, Input } from 'antd';
import { useState } from 'react';
import { postCreateGroup } from '../../../API/Group/postCreateGroup.js';
import {useNotification} from "../../../providers/NotificationProvider.jsx";
import {notificationTypes} from "../../../consts/notificationTypes.js";
import {notificationText} from "../../../consts/notificationText.js";

const CreateGroupModal = ({ isModalOpen, setIsModalOpen, updateGroups }) => {
    const [loading, setLoading] = useState(false);
    const [groupName, setGroupName] = useState('');
    const {notify} = useNotification()

    const handleOk = async () => {
        setLoading(true);
        const response = await postCreateGroup(groupName);
        setTimeout(() => {
            setLoading(false);
            if (response) {
                notify(notificationTypes.success(), notificationText.createGroup.Success())
                setIsModalOpen(false);
                updateGroups();
            }
            else {
                notify(notificationTypes.error(), notificationText.createGroup.Fail())
            }
        }, 500);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setGroupName('');
    };

    const handleChange = (e) => {
        setGroupName(e.target.value);
    };

    const footer = [
        <Button key="cancel" onClick={handleCancel}>
            Отменить
        </Button>,
        <Button key="create" type="primary" loading={loading} onClick={handleOk}>
            Создать
        </Button>
    ];

    return (
        <Modal
            open={isModalOpen}
            title="Редактирование группы курсов"
            onCancel={handleCancel}
            footer={footer}
        >
            <span>Название группы курсов:</span>
            <Input value={groupName} onChange={handleChange} />
        </Modal>
    );
};

export default CreateGroupModal;
