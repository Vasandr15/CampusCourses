import {Modal, Button, Input} from 'antd'
import {useState} from "react";
import {editGroup} from "../../API/editGroup.js";

const EditModal = ({id, isModalOpen, setIsModalOpen, courseName, updateGroups}) => {
    const [newCourseName, setNewCourseName] = useState(courseName);
    const [loading, setLoading] = useState(false);
    const handleOk = async () => {
        setLoading(true)
        const response = await editGroup(id, newCourseName)
        setTimeout(() =>{
            setLoading(false)
            if(response === 200){
                //notify
                setIsModalOpen(false)
                updateGroups();
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

export default EditModal;