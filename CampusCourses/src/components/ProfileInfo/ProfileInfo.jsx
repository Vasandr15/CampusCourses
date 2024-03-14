import {reformatDate} from "../../helpers/reformatDate.js";
import {Button, Flex, Typography} from "antd";
import styles from "../ProfileCard/profileCard.module.css";
import {EditOutlined} from "@ant-design/icons";
import React from "react";

const {Title} = Typography;

const ProfileInfo = ({fullName, email, birthDate, handleEdit}) =>{

    return (
        <>
            <section>
                <Title level={4}>ФИО:</Title>
                <span>{fullName}</span>
            </section>
            <section>
                <Title level={4}>Email:</Title>
                <span>{email}</span>
            </section>
            <section>
                <Title level={4}>Дата рождения:</Title>
                <span>{reformatDate(birthDate)}</span>
            </section>
            <Flex className={styles.buttonContainer}>
                <Button type="primary" icon={<EditOutlined />} onClick={handleEdit}>Редактировать</Button>
            </Flex>
        </>
    )
}

export default ProfileInfo;