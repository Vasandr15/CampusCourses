import {Button, Card, Flex, Form, Input, Typography} from "antd";
import {LockOutlined, MailOutlined} from "@ant-design/icons";
import {Validations} from "../../consts/validationRules.js";
import styles from './loginForm.module.css'
import {useState} from "react";
import {postLoginUser} from "../../API/User/postLoginUser.js";
import {useNotification} from "../../providers/NotificationProvider.jsx";
import {Link, useNavigate} from "react-router-dom";
import {routes} from "../../consts/routes.js";
import {notificationTypes} from "../../consts/notificationTypes.js";
import {notificationText} from "../../consts/notificationText.js";
import {setEmail} from "../../actions/emailAction.js";
import {useDispatch} from "react-redux";
import {setAuth} from "../../actions/authorizationAction.js";

const {Title, Text} = Typography;
export const LoginForm = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const {notify} = useNotification();
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onFinish = async (values) => {
        setLoading(true);
        console.log(values);
        let data = await postLoginUser(values);
        setTimeout(() => {
            if(data){
                localStorage.setItem('token', data.token)
                dispatch(setAuth(true))
                notify(notificationTypes.success(), notificationText.login.Success())
                navigate(routes.root())
            }
            else{
                notify(notificationTypes.error(), notificationText.login.Fail())
            }
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
                        <Text>Ещё нет аккаунта? <Link to={routes.registration()}>Зарегестрироваться</Link></Text>
                    </Flex>
                </Form>
            </Card>
        </>
    );
}