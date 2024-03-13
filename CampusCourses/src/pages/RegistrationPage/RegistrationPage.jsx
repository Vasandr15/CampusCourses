import styles from './registration.module.css'
import {Flex} from "antd";
import {RegisterForm} from "../../components/RegisterForm/RegisterForm.jsx";


export const RegistrationPage = () =>{
    return(
        <>
            <Flex className={styles.formContainer}>
                <RegisterForm/>
            </Flex>
        </>
    );
}
