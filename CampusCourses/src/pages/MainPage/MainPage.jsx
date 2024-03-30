import {Typography} from "antd";
import HeaderSection from "../../components/Header/Header.jsx";
import styles from './main.module.css'
const {Title} = Typography
const MainPage = () => {
    return (
        <>
            <HeaderSection/>
            <section className={styles.textSection}>
                <Title level={1}>Добро пожаловать в систему кампусных курсов</Title>
            </section>
        </>
    )
}

export default MainPage