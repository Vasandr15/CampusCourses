import {Typography} from "antd";
import styles from './main.module.css'
const {Title} = Typography
const MainPage = () => {
    return (
        <>
            <section className={styles.textSection}>
                <Title level={1}>Добро пожаловать в систему кампусных курсов</Title>
            </section>
        </>
    )
}

export default MainPage