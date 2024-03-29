import {Card, Divider} from "antd";
import styles from '../CourseInfo/info.module.css'
import StatusInfo from "./StatusInfo/StatusInfo.jsx";
import SemesterInfo from "./SemesterInfo/SemesterInfo.jsx";
import StudentsInfo from "./StudentsInfo/StudentsInfo.jsx";
import RequestsInfo from "./RequestsInfo/RequestsInfo.jsx";

const CourseInfo = ({startYear,maximumStudentsCount, studentsEnrolledCount, studentsInQueueCount, status, semester }) =>{

    return(
        <>
            <Card className={styles.card}>
                <StatusInfo status={status}/>
                <Divider/>
                <SemesterInfo startYear={startYear} semester={semester}/>
                <Divider/>
                <StudentsInfo studentsEnrolledCount={studentsEnrolledCount} maximumStudentsCount={maximumStudentsCount}/>
                <Divider/>
                <RequestsInfo studentsInQueueCount={studentsInQueueCount}/>
            </Card>
        </>
    )
}

export default CourseInfo