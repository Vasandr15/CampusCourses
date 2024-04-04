import {Button, DatePicker, Flex, Form, Input, Typography} from "antd";
import {DATE_FORMAT} from "../../consts/strings.js";
import locale from 'antd/es/date-picker/locale/ru_RU.js';
import 'dayjs/locale/ru.js';
import React from "react";
import { Validations } from "../../consts/validationRules.js";
import styles from '../ProfileCard/profileCard.module.css'
import moment from "moment";
import customParseFormat from 'dayjs/plugin/customParseFormat';
import dayjs from "dayjs";
import {cleanUpValues} from "../../helpers/bodyHelper.js";
import {putEditProfile} from "../../API/User/putEditProfile.js";
import {useNotification} from "../../providers/NotificationProvider.jsx";
import {notificationTypes} from "../../consts/notificationTypes.js";
import {notificationText} from "../../consts/notificationText.js";
dayjs.extend(customParseFormat);

const { Title, Text  } = Typography;

const ProfileEditForm = ({ email, fullName, birthDate, setEditing, setUserInfo }) => {
    const [form] = Form.useForm();
    const {notify} = useNotification()
    const handleCancelEdit = () => {
        setEditing(false);
    };

    const onFinish = async (values) => {
        cleanUpValues(values);
        let data = await putEditProfile(values);
        if (data){
            notify(notificationTypes.success(),notificationText.editUserProfile.Success() )
            setEditing(false);
            setUserInfo(data)
        }
        else{
            notify(notificationTypes.error(), notificationText.editUserProfile.Fail())
        }

    };

    const fullNameParts = fullName.split(' ');
    return (
        <Form form={form} name="profileEdit" onFinish={onFinish} layout="vertical"
              initialValues={{
                  name: fullNameParts[1],
                  surname: fullNameParts[0],
                  middleName: fullNameParts[2],
                  birthDate: dayjs(birthDate)
              }}>
            <section>
                <Title level={4}>ФИО:</Title>
                <Flex className={styles.nameInputsContainer}>
                    <Form.Item name="surname" rules={Validations.surnameValidationRules()} style={{ flex: '1'}}>
                        <Input placeholder="Фамилия" />
                    </Form.Item>
                    <Form.Item name="name" rules={Validations.nameValidationRules()} style={{ flex: '1' , marginLeft: '16px' }}>
                        <Input placeholder="Имя" />
                    </Form.Item>
                    <Form.Item name="middleName" rules={Validations.middleNameValidationRules()} style={{ flex: '1', marginLeft: '16px' }}>
                        <Input placeholder="Отчество" />
                    </Form.Item>
                </Flex>

            </section>
            <div>
                <Title level={4}>Email:</Title>
                <Text>{email}</Text>
            </div>
            <section>
                <Title level={4}>Дата рождения:</Title>
                <Form.Item name="birthDate" rules={Validations.birthDateValidationRules()}>
                    <DatePicker
                        style={{ width: '100%' }}
                        locale={locale}
                        format={DATE_FORMAT}
                        maxDate={dayjs(new Date())}
                    />
                </Form.Item>
            </section>
            <Flex className={styles.buttonContainer} >
                <Button htmlType="submit" type="primary">Сохранить</Button>
                <Button style={{ marginLeft: 8 }} onClick={handleCancelEdit}>Отмена</Button>
            </Flex>
        </Form>
    );
}

export default ProfileEditForm;
