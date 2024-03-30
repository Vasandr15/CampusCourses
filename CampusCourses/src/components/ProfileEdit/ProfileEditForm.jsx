import {Button, DatePicker, Flex, Form, Input, Typography} from "antd";
import {DATE_FORMAT} from "../../consts/strings.js";
import locale from 'antd/es/date-picker/locale/ru_RU.js';
import 'dayjs/locale/ru.js';
import React from "react";
import { useForm } from "antd/es/form/Form.js";
import { Validations } from "../../consts/validationRules.js";
import styles from '../ProfileCard/profileCard.module.css'
import moment from "moment";
import customParseFormat from 'dayjs/plugin/customParseFormat';
import dayjs from "dayjs";
import {cleanUpValues} from "../../helpers/bodyHelper.js";
import {putEditProfile} from "../../API/User/putEditProfile.js";
dayjs.extend(customParseFormat);

const { Title } = Typography;

const ProfileEditForm = ({ email, fullName, birthDate, setEditing, setUserInfo }) => {
    const [form] = useForm();
    const handleCancelEdit = () => {
        setEditing(false);
    };

    const onFinish = async (values) => {
        cleanUpValues(values);
        let data = await putEditProfile(values);
        if (data){
            //notify
            setEditing(false);
            setUserInfo(data)
        }
        else{
            // notify
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
                <span>{email}</span>
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
