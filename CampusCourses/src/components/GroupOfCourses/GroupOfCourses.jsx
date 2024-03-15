import {Card, Flex, Button} from 'antd'
import styles from './group.module.css'
import {useState} from "react";
import DeleteModal from "../Modals/DeleteModal.jsx";
import EditModal from "../Modals/EditModal.jsx";

const GroupOfCourses = ({ name, admin}) => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const showEditModal = () => {
        setIsEditModalOpen(true);
    };
    const showDeleteModal = () => {
        setIsDeleteModalOpen(true);
    };

    return (
        <>
            <Card style={{marginBottom: '10px'}} hoverable>
                <Flex>
                    <span>{name}</span>
                    {admin && (
                        <Flex style={{marginLeft: 'auto'}}>
                            <Button onClick={showEditModal} className={styles.editBtn}>Редактировать</Button>
                            <Button onClick={showDeleteModal} danger>Удалить</Button>
                        </Flex>
                    )}
                    {!admin && null}
                </Flex>
            </Card>
            <DeleteModal  setIsModalOpen={setIsDeleteModalOpen} isModalOpen={isDeleteModalOpen} courseName={name}/>
            <EditModal setIsModalOpen={setIsEditModalOpen} isModalOpen={isEditModalOpen} courseName={name}/>
        </>
    )
}

export default GroupOfCourses