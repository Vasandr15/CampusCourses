import { Typography, Flex, Button} from 'antd';
import {PlusOutlined} from '@ant-design/icons'
import styles from '../GroupsOfCoursesPage/groups.module.css';
import ListOfGroups from '../../components/ListOfGroups/ListOfGroups.jsx';
import { getRoles } from '../../API/getRoles.js';
import { useEffect, useState } from 'react';

const { Title } = Typography;

const GroupsOfCoursesPage = () => {
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getRoles();
                setIsAdmin(response.isAdmin);
            } catch (error) {
                console.error('Error fetching roles:', error);
            }
        };

        fetchData();
    }, []);

    const openCreationWindow = () =>{

    }
    return (
        <>
            <Flex className={styles.titleContainer}>
                <Title>Группы курсов</Title>
            </Flex>
            {isAdmin && (
                <Flex style={{justifyContent: 'center'}}>
                    <Button type="primary" style={{width: '50%'}} onClick={openCreationWindow}>Создать группу<PlusOutlined /></Button>
                </Flex>
            )}
            {!isAdmin && null}
            <Flex style={{ justifyContent: 'center', marginTop: '10px'}}>
                <ListOfGroups admin={isAdmin} />
            </Flex>
        </>
    );
};

export default GroupsOfCoursesPage;
