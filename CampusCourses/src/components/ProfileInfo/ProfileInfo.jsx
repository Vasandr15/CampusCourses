import {reformatDate} from "../../helpers/reformatDate.js";
import {Button, Flex, Space, Typography} from "antd";
import styles from "../ProfileCard/profileCard.module.css";
import {EditOutlined} from "@ant-design/icons";
import React from "react";

const {Title, Text} = Typography;

const ProfileInfo = ({fullName, email, birthDate, handleEdit}) =>{

    return (
        <Space wrap >
            <Space direction={"vertical"} wrap>
                <Space direction={'vertical'}>
                    <Title level={4}>ФИО:</Title>
                    <Text>{fullName}</Text>
                </Space>
                <Space direction={"vertical"}>
                    <Title level={4}>Email:</Title>
                    <Text>{email}</Text>
                </Space>
                <Space direction={"vertical"}>
                    <Title level={4}>Дата рождения:</Title>
                    <Text>{reformatDate(birthDate)}</Text>
                </Space>
                <Space className={styles.buttonContainer}>
                    <Button type="primary" icon={<EditOutlined />} onClick={handleEdit}>Редактировать</Button>
                </Space>
            </Space>
        </Space>
    )
}

export default ProfileInfo;