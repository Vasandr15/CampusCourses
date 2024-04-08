import {Typography, Flex, Button, Card} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import styles from '../GroupsOfCoursesPage/groups.module.css';
import ListOfGroups from '../../components/ListOfGroups/ListOfGroups.jsx';
import {useEffect, useState} from 'react';
import CreateGroupModal from "../../components/Modals/CreateGroupModal/CreateGroupModal.jsx";
import {getGroupsOfCourses} from "../../API/Group/getGroupsOfCourses.js";
import { useSelector} from "react-redux";
import {useNotification} from "../../providers/NotificationProvider.jsx";
import {notificationTypes} from "../../consts/notificationTypes.js";
import {notificationText} from "../../consts/notificationText.js";

const {Title} = Typography;

const GroupsOfCoursesPage = () => {
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [groups, setGroups] = useState([]);
    const {notify} = useNotification()
    const roles = useSelector(state => state.roles.roles)

    useEffect(() => {
        fetchGroups();
    }, []);

    const fetchGroups = async () => {
        const result = await getGroupsOfCourses();
        if (result) {
            setGroups(result);
        } else {
            notify(notificationTypes.error(), notificationText.pageLoading.Fail())
        }
    };

    const updateGroups = async () => {
        const updatedGroups = await getGroupsOfCourses();
        if (updatedGroups) {
            setGroups(updatedGroups);
        } else {
            notify(notificationTypes.error(), notificationText.updateGroups.Fail())
        }
    };

    const showCreateModal = () => {
        setIsCreateModalOpen(true);
    };

    return (
        <>
            <Card className={styles.groupCard}>
                <Title>Группы курсов</Title>
                {roles && roles.isAdmin && (
                    <Flex style={{justifyContent: 'center'}}>
                        <Button type="primary" style={{width: '100%'}} onClick={showCreateModal}>Создать
                            группу<PlusOutlined/></Button>
                    </Flex>
                )}
                <Flex style={{justifyContent: 'center', marginTop: '10px'}}>
                    <ListOfGroups groups={groups} updateGroups={updateGroups}/>
                </Flex>
            </Card>
            <CreateGroupModal isModalOpen={isCreateModalOpen} setIsModalOpen={setIsCreateModalOpen}
                              updateGroups={updateGroups}/>
        </>
    );
};

export default GroupsOfCoursesPage;
