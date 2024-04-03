import {Card, Button, Space, Typography, Flex} from 'antd';
import styles from './group.module.css';
import { useState } from "react";
import DeleteGroupModal from "../Modals/DeleteGroupModal/DeleteGroupModal.jsx";
import EditGroupModal from "../Modals/EditGroupModal/EditGroupModal.jsx";
import { useNavigate } from "react-router-dom";
import { routes } from "../../consts/routes.js";

const { Text } = Typography;

const GroupOfCourses = ({ id, name, admin, updateGroups }) => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const navigate = useNavigate();

    const handleEditButtonClick = (e) => {
        e.stopPropagation();
        setIsEditModalOpen(true);
    };

    const handleDeleteButtonClick = (e) => {
        e.stopPropagation();
        setIsDeleteModalOpen(true);
    };

    return (
        <>
            <Card style={{ marginBottom: '10px'}} hoverable onClick={() => navigate(routes.group(id))}>
                <Flex  align={"baseline"}>
                    <Text>{name}</Text>
                    {admin && (
                        <Space style={{marginLeft: 'auto'}}>
                            <Button onClick={handleEditButtonClick} className={styles.editBtn}>Редактировать</Button>
                            <Button onClick={handleDeleteButtonClick} danger>Удалить</Button>
                        </Space>
                    )}
                </Flex>
            </Card>
            <DeleteGroupModal id={id} setIsModalOpen={setIsDeleteModalOpen} isModalOpen={isDeleteModalOpen} courseName={name} updateGroups={updateGroups} />
            <EditGroupModal id={id} setIsModalOpen={setIsEditModalOpen} isModalOpen={isEditModalOpen} courseName={name} updateGroups={updateGroups} />
        </>
    )
}

export default GroupOfCourses;
