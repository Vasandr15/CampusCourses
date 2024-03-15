import {Modal, Button, Input} from 'antd'
import {useState} from "react";
const EditModal = ({isModalOpen, setIsModalOpen, courseName}) =>{
    const [newCourseName, setNewCourseName] = useState(courseName);
    const handleOk = () => {
        //api request
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    }
    const handleChange = (e) => {
        setNewCourseName(e.target.value);
    };

    return(
        <Modal open={isModalOpen} title="Редактирование группы курсов"
               onCancel={handleCancel}
               footer={[
                   <Button onClick={handleCancel}> Отменить</Button>,
                   <Button type="primary" onClick={handleOk}> Изменить</Button>
               ]}>
            <span>Название группы курсов:</span>
            <Input value={newCourseName} onChange={handleChange} />
        </Modal>
    )
}

export default EditModal;