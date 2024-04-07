import React, { useState, useEffect } from 'react';
import {Card, Row, Col, Avatar} from 'antd';
import { UserOutlined} from '@ant-design/icons';
import styles from './profileCard.module.css';
import 'dayjs/locale/ru.js';
import { getProfile } from "../../API/User/getProfile.js";
import ProfileInfo from "../ProfileInfo/ProfileInfo.jsx";
import ProfileEditForm from "../ProfileEdit/ProfileEditForm.jsx";
import {useNotification} from "../../providers/NotificationProvider.jsx";
import {notificationTypes} from "../../consts/notificationTypes.js";
import {notificationText} from "../../consts/notificationText.js";

const ProfileCard = () => {
    const [userInfo, setUserInfo] = useState(null);
    const [editing, setEditing] = useState(false);
    const [setEditedUserInfo] = useState({});
    const {notify} = useNotification()

    useEffect(() => {
        const fetchData = async () => {
            const data = await getProfile();
            if(!data){
                notify(notificationTypes.error(), notificationText.fetchUserProfile.Fail())
            }
            setUserInfo(data);
        };
        fetchData();
    }, []);

    const handleEdit = () => {
        setEditing(true);
        setEditedUserInfo(userInfo);
    };



    return (
        <Card className={styles.card} >
            <Row align="middle" wrap>
                <Col style={{ position: 'relative', width: 'fit-content', marginRight: '50px' }}>
                    <Avatar size={180} className={styles.avatar} icon={<UserOutlined />} />
                </Col>
                <Col style={{ width: '50%' }}>
                    {userInfo && !editing && (
                        <ProfileInfo fullName={userInfo.fullName} birthDate={userInfo.birthDate} email={userInfo.email}
                                     handleEdit={handleEdit}/>
                    )}
                    {userInfo && editing && (
                        <ProfileEditForm fullName={userInfo.fullName} birthDate={userInfo.birthDate} email={userInfo.email}
                                         setEditing={setEditing} setUserInfo={setUserInfo}/>
                    )}
                </Col>
            </Row>
        </Card>



    );
};

export default ProfileCard;