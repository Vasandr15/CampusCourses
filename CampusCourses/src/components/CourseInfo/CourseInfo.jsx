import {Card, Divider} from "antd";
import styles from '../CourseInfo/info.module.css'
import StatusInfo from "./StatusInfo/StatusInfo.jsx";
import SemesterInfo from "./SemesterInfo/SemesterInfo.jsx";
import StudentsInfo from "./StudentsInfo/StudentsInfo.jsx";
import RequestsInfo from "./RequestsInfo/RequestsInfo.jsx";

const CourseInfo = () =>{
    return(
        <>
            <Card className={styles.card}>
                <StatusInfo />
                <Divider/>
                <SemesterInfo/>
                <Divider/>
                <StudentsInfo/>
                <Divider/>
                <RequestsInfo />
            </Card>
        </>
    )
}

export default CourseInfo