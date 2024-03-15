import {Modal, Button} from 'antd'
const DeleteModal = ({isModalOpen, setIsModalOpen, courseName}) =>{
    const handleOk = () => {
        //api request
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    }

    return(
        <Modal open={isModalOpen} title="Удаление группы курсов"
               onCancel={handleCancel}
            footer={[
                <Button onClick={handleCancel}> Отменить</Button>,
                <Button type="primary" danger onClick={handleOk}> Удалить</Button>
            ]}>
            <span>{`Вы уверены, что хотите удалить группу курсов ${courseName}?`}</span>
        </Modal>
    )
}

export default DeleteModal;