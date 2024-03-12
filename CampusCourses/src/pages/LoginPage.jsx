import {LoginForm} from "../components/LoginForm/LoginForm.jsx";
import styles from './login.module.css'
import {Flex} from "antd";


export const LoginPage = () =>{
    return(
        <>
            <Flex className={styles.formContainer}>
                <LoginForm/>
            </Flex>
        </>
    );
}