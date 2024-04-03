import { Typography, Flex, Button, Card } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import styles from '../GroupsOfCoursesPage/groups.module.css';
import ListOfGroups from '../../components/ListOfGroups/ListOfGroups.jsx';
import { getRoles } from '../../API/Users/getRoles.js';
import { useEffect, useState } from 'react';
import CreateGroupModal from "../../components/Modals/CreateGroupModal/CreateGroupModal.jsx";
import {getGroupsOfCourses} from "../../API/Group/getGroupsOfCourses.js";

const { Title } = Typography;

const GroupsOfCoursesPage = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [groups, setGroups] = useState([]);

    const fetchData = async () => {
        try {
            const response = await getRoles();
            setIsAdmin(response.isAdmin);
        } catch (error) {
            console.error('Error fetching roles:', error);
        }
    };

    useEffect(() => {
        fetchData();
        fetchGroups();
    }, []);

    const fetchGroups = async () => {
        const result = await getGroupsOfCourses();
        if (result) {
            setGroups(result);
        } else {
            // notify
        }
    };

    const updateGroups = async () => {
        const updatedGroups = await getGroupsOfCourses();
        if (updatedGroups) {
            setGroups(updatedGroups);
        } else {
            // Notify or handle error
        }
    };

    const showCreateModal = () => {
        setIsCreateModalOpen(true);
    };

    return (
        <>
            <Card className={styles.groupCard}>
                <Title>Группы курсов</Title>
                {isAdmin && (
                    <Flex style={{ justifyContent: 'center' }}>
                        <Button type="primary" style={{ width: '100%' }} onClick={showCreateModal}>Создать
                            группу<PlusOutlined /></Button>
                    </Flex>
                )}
                <Flex style={{ justifyContent: 'center', marginTop: '10px' }}>
                    <ListOfGroups admin={isAdmin} groups={groups} updateGroups={updateGroups}/>
                </Flex>
            </Card>
            <CreateGroupModal isModalOpen={isCreateModalOpen} setIsModalOpen={setIsCreateModalOpen} updateGroups={updateGroups} />
        </>
    );
};

export default GroupsOfCoursesPage;
