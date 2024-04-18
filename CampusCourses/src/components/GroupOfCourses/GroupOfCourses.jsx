import {Card, Button, Space, Typography, Flex} from 'antd';
import styles from './group.module.css';
import { useState } from "react";
import DeleteGroupModal from "../Modals/DeleteGroupModal/DeleteGroupModal.jsx";
import EditGroupModal from "../Modals/EditGroupModal/EditGroupModal.jsx";
import { useNavigate } from "react-router-dom";
import { routes } from "../../consts/routes.js";
import {useSelector} from "react-redux";

const { Text } = Typography;

const GroupOfCourses = ({ id, name, updateGroups }) => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const roles = useSelector(state => state.roles.roles)
    const navigate = useNavigate();

    const handleEditButtonClick = (e) => {
        e.stopPropagation();
        setIsEditModalOpen(true);
    };

    const handleDeleteButtonClick = (e) => {
        e.stopPropagation();
        setIsDeleteModalOpen(true);
    };

    const handleOnClick = () =>{
        navigate(routes.group(id))
    }

    return (
        <>
            <Card style={{ marginBottom: '10px'}} hoverable onClick={handleOnClick}>
                <Space wrap  align={"baseline"} style={{display: "flex", justifyContent: "space-between"}}>
                    <Space style={{display: "flex"}}>
                        <Text>{name}</Text>
                    </Space>
                    {roles && roles.isAdmin && (
                        <Space wrap style={{marginLeft: 'auto'}}>
                            <Button onClick={handleEditButtonClick} className={styles.editBtn}>Редактировать</Button>
                            <Button onClick={handleDeleteButtonClick} danger>Удалить</Button>
                        </Space>
                    )}
                </Space>
            </Card>
            <DeleteGroupModal id={id} setIsModalOpen={setIsDeleteModalOpen} isModalOpen={isDeleteModalOpen} courseName={name} updateGroups={updateGroups} />
            <EditGroupModal id={id} setIsModalOpen={setIsEditModalOpen} isModalOpen={isEditModalOpen} courseName={name} updateGroups={updateGroups} />
        </>
    )
}


export default GroupOfCourses;
