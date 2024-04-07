import {Button, Card, DatePicker, Flex, Form, Input, Typography} from "antd";
import {Validations} from "../../consts/validationRules.js";
import styles from './registerFrom.module.css'
import {useState} from "react";
import {cleanUpValues} from "../../helpers/bodyHelper.js";
import {postRegisterUser} from "../../API/User/postRegisterUser.js";
import locale from 'antd/es/date-picker/locale/ru_RU.js';
import 'dayjs/locale/ru.js';
import {InfoCircleOutlined} from "@ant-design/icons";
import {Link, useNavigate} from "react-router-dom";
import {routes} from "../../consts/routes.js";
import {DATE_FORMAT} from "../../consts/strings.js";
import {useNotification} from "../../providers/NotificationProvider.jsx";
import {notificationTypes} from "../../consts/notificationTypes.js";
import {notificationText} from "../../consts/notificationText.js";

const {Title} = Typography;
export const RegisterForm = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    const {notify} = useNotification()

    const onFinish = async (values) => {
        setLoading(true);
        cleanUpValues(values);
        console.log(values);
        const data = await postRegisterUser(values);
        setTimeout(() => {
            setLoading(false);
            if(data){
                localStorage.setItem('token', data.token)
                notify(notificationTypes.success(), notificationText.registration.Success())
                navigate(routes.root())
            }
            else{
                notify(notificationText.registration.Fail())
            }
        }, 500);
    }

    return (
        <>
            <Card className={styles.registerCard}>
                <Form form={form} name="registration" onFinish={onFinish} layout="vertical"
                      initialValues={{remember: true,}}
                >
                    <Flex className={styles.titleContainer}>
                        <Title>Регистрация</Title>
                    </Flex>
                    <Flex className={styles.nameInputsContainer}>
                        <Form.Item name="surname" label="Фамилия" rules={Validations.surnameValidationRules()}>
                            <Input/>
                        </Form.Item>
                        <Form.Item name="name" label="Имя" rules={Validations.nameValidationRules()}>
                            <Input/>
                        </Form.Item>
                        <Form.Item name="middleName" label="Отчество" rules={Validations.middleNameValidationRules()}>
                            <Input/>
                        </Form.Item>
                    </Flex>
                    <Form.Item name="email" label="Email" rules={Validations.emailValidation()}  tooltip={{
                        title: 'Email будет использоваться для входа в систему',
                        icon: <InfoCircleOutlined />,
                    }}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name="birthDate" label="Дата рождения" rules={Validations.birthDateValidationRules()}>
                        <DatePicker style={{width: '100%'}} locale={locale} format={DATE_FORMAT}/>
                    </Form.Item>
                    <Form.Item name="password" label="Пароль" hasFeedback rules={Validations.passwordValidation()}>
                        <Input.Password/>
                    </Form.Item>
                    <Form.Item name="confirmPassword" label="Потдверждение пароля" dependencies={['password']} hasFeedback
                               rules={Validations.confirmPasswordValidation()}
                    >
                        <Input.Password/>
                    </Form.Item>
                    <Flex className={styles.buttonContainer}>
                            <Button type="primary" htmlType="submit" loading={loading}>
                                Зарегестрироваться
                            </Button>
                    </Flex>
                </Form>
                <Flex className={styles.textContainer}>
                    <p>Уже есть аккаунт?<Link to={routes.login()}> Войти</Link></p>
                </Flex>
            </Card>
        </>
    );
}
