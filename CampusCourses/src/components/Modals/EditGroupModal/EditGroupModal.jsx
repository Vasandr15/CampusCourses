import {Modal, Button, Input} from 'antd'
import {useState} from "react";
import {putEditGroup} from "../../../API/Group/putEditGroup.js";
import {useNotification} from "../../../providers/NotificationProvider.jsx";
import {notificationTypes} from "../../../consts/notificationTypes.js";
import {notificationText} from "../../../consts/notificationText.js";

const EditGroupModal = ({id, isModalOpen, setIsModalOpen, courseName, updateGroups}) => {
    const [newCourseName, setNewCourseName] = useState(courseName);
    const [loading, setLoading] = useState(false);
    const {notify} = useNotification()

    const handleOk = async () => {
        setLoading(true)
        const response = await putEditGroup(id, newCourseName)
        setTimeout(() =>{
            setLoading(false)
            if(response === 200){
                notify(notificationTypes.success(), notificationText.editGroup.Success())
                setIsModalOpen(false)
                updateGroups();
            }
            else{
                notify(notificationTypes.error(), notificationText.editGroup.Fail())
            }
        }, 500)
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    }
    const handleChange = (e) => {
        setNewCourseName(e.target.value);
    };

    const footer = [
        <Button key="cnacel" onClick={handleCancel}> Отменить</Button>,
        <Button key="edit" type="primary" onClick={handleOk} loading={loading}> Изменить</Button>
    ]
    return (
        <Modal open={isModalOpen} title="Редактирование группы курсов"
               onCancel={handleCancel}
               footer={footer}>
            <span>Название группы курсов:</span>
            <Input value={newCourseName} onChange={handleChange}/>
        </Modal>
    )
}

export default EditGroupModal;