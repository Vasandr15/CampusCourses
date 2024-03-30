import {Modal, Button} from 'antd'
import {deleteGroup} from "../../../API/Group/deleteGroup.js";
import {useState} from "react";
const DeleteGroupModal = ({id, isModalOpen, setIsModalOpen, courseName, updateGroups}) =>{
    const [loading, setLoading] = useState(false);
    const handleOk = async() => {
        setLoading(true)
        const response = await deleteGroup(id)
        setTimeout(() =>{
            setLoading(false)
            if(response === 200){
                //notify
                setIsModalOpen(false)
                updateGroups();
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