import React, { useState, useEffect } from 'react';
import {Card, Row, Col, Avatar, Typography} from 'antd';
import { UserOutlined} from '@ant-design/icons';
import styles from './profileCard.module.css';
import 'dayjs/locale/ru.js';
import { getProfile } from "../../API/getProfile.js";
import ProfileInfo from "../ProfileInfo/ProfileInfo.jsx";
import ProfileEditForm from "../ProfileEdit/ProfileEditForm.jsx";

const { Title } = Typography;

localStorage.setItem('token',
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJkZDQyNDFkZC0xMmExLTQzODUtMDlhNi0wOGRjNDJhNjMxY2MiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9hdXRoZW50aWNhdGlvbiI6IjU4MjBmZTI5LWMyMWMtNDQ4NC04ZDgzLTgzOTIxMTQ5NjY0OCIsIm5iZiI6MTcxMDQyOTg0MSwiZXhwIjoxNzEwNDMzNDQxLCJpYXQiOjE3MTA0Mjk4NDEsImlzcyI6IkNhbXB1c0NvdXJzZS5BUEkiLCJhdWQiOiJDYW1wdXNDb3Vyc2UuQVBJIn0.5WaEUXE8_C2_0meMyo-4gPoi96jb6fZ6jeEo2tFLDis"
)
const ProfileCard = () => {
    const [userInfo, setUserInfo] = useState(null);
    const [editing, setEditing] = useState(false);
    const [editedUserInfo, setEditedUserInfo] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const data = await getProfile();
            setUserInfo(data);
        };
        fetchData();
    }, []);

    const handleEdit = () => {
        setEditing(true);
        setEditedUserInfo(userInfo);
    };



    return (
        <Card className={styles.card} md={11}>
            <Row align="middle">
                <Col style={{ position: 'relative', width: 'fit-content', marginRight: '50px' }}>
                    <Avatar size={120} className={styles.avatar} icon={<UserOutlined />} />
                </Col>
                <Col style={{ width: '400px' }}> {/* Adjust the width as needed */}
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