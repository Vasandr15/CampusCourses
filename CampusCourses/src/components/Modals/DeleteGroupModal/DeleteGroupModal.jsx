import {Modal, Button} from 'antd'
import {deleteGroup} from "../../../API/Group/deleteGroup.js";
import {useState} from "react";
import {useNotification} from "../../../providers/NotificationProvider.jsx";
import {notificationTypes} from "../../../consts/notificationTypes.js";
import {notificationText} from "../../../consts/notificationText.js";
const DeleteGroupModal = ({id, isModalOpen, setIsModalOpen, courseName, updateGroups}) =>{
    const [loading, setLoading] = useState(false);
    const {notify} = useNotification()

    const handleOk = async() => {
        setLoading(true)
        const response = await deleteGroup(id)
        setTimeout(() =>{
            setLoading(false)
            if(response === 200){
                notify(notificationTypes.success(), notificationText.deleteGroup.Success())
                setIsModalOpen(false)
                updateGroups();
            }
            else{
                notify(notificationTypes.error(), notificationText.deleteGroup.Fail())
            }
        }, 500)
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    }
    const footer =
        [
            <Button key="cancel" onClick={handleCancel}> Отменить</Button>,
            <Button key="delete" type="primary" danger onClick={handleOk} loading={loading}> Удалить</Button>
        ]
    return(
        <Modal open={isModalOpen} title="Удаление группы курсов"
               onCancel={handleCancel}
            footer={footer}>
            <span>{`Вы уверены, что хотите удалить группу курсов ${courseName}?`}</span>
        </Modal>
    )
}

export default DeleteGroupModal;