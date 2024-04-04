import {Typography, Flex, Button, Card} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import styles from '../GroupsOfCoursesPage/groups.module.css';
import ListOfGroups from '../../components/ListOfGroups/ListOfGroups.jsx';
import {getRoles} from '../../API/Users/getRoles.js';
import {useEffect, useState} from 'react';
import CreateGroupModal from "../../components/Modals/CreateGroupModal/CreateGroupModal.jsx";
import {getGroupsOfCourses} from "../../API/Group/getGroupsOfCourses.js";
import {connect} from "react-redux";
import {useNotification} from "../../providers/NotificationProvider.jsx";
import {notificationTypes} from "../../consts/notificationTypes.js";
import {notificationText} from "../../consts/notificationText.js";

const {Title} = Typography;

const GroupsOfCoursesPage = ({roles}) => {
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [groups, setGroups] = useState([]);
    const {notify} = useNotification()

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
                {roles.isAdmin && (
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

const mapStateToProps = (state) => ({
    roles: state.roles.roles
});

export default connect(mapStateToProps)(GroupsOfCoursesPage);
