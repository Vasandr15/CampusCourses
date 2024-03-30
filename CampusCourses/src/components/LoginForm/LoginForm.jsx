import {Button, Card, Flex, Form, Input, message, Tag, Typography} from "antd";
import {LockOutlined, MailOutlined} from "@ant-design/icons";
import {Validations} from "../../consts/validationRules.js";
import styles from './loginForm.module.css'
import {useState} from "react";
import {postLoginUser} from "../../API/User/postLoginUser.js";
import {useNotification} from "../../contexts/NotificationContext.jsx";

const {Title} = Typography;
export const LoginForm = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const {notify} = useNotification();

    const onFinish = async (values) => {
        setLoading(true);
        console.log(values);
        let data = await postLoginUser(values);
        if(data){
            notify('success', 'Вы успешно вошли')
            localStorage.setItem('token', data.token)
        }
        else{
            notify('error', 'Неверный логин или пароль')
        }
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }

    return (
        <>
            <Card className={styles.loginCard}>
                <Form form={form} layout='vertical' name='login' onFinish={onFinish} initialValues={{remember: true}}>
                    <Flex className={styles.titleContainer}>
                        <Title>Вход</Title>
                    </Flex>
                    <Form.Item name='email' label='Email' rules={Validations.emailValidation()}>
                        <Input prefix={<MailOutlined/>} placeholder='Введите email'/>
                    </Form.Item>
                    <Form.Item name='password' label='Пароль' hasFeedback rules={Validations.passwordValidation()}>
                        <Input.Password prefix={<LockOutlined className="site-form-item-icon"/>}
                                        type="password"
                                        placeholder="Password"/>
                    </Form.Item>
                    <Flex className={styles.buttonContainer}>
                        <Button type='primary' htmlType='submit' loading={loading}>Войти</Button>
                    </Flex>
                    <Flex className={styles.textContainer}>
                        Ещё нет аккаунта?<a> Зарегестрироваться</a>
                    </Flex>
                </Form>
            </Card>
        </>
    );
}