import {Col, Row, Space, Typography} from "antd";
import {getCourseYear} from "../../../helpers/courseYear.js";
import {getCourseSemester} from "../../../helpers/courseSemester.js";
import { useSelector} from "react-redux";

const {Text} = Typography
const SemesterInfo = () =>{
    const courseInfo = useSelector(state => state.courseInfo.courseInfo)

    return(
        <Row>
            <Col md={12}>
                <Space direction={"vertical"}>
                    <Text strong>Учебный год:</Text>
                    <Text>{getCourseYear(courseInfo.startYear)}</Text>
                </Space>
            </Col>
            <Col md={12}>
                <Space direction={"vertical"}>
                    <Text strong>Семестр:</Text>
                    <Text>{getCourseSemester(courseInfo.semester)}</Text>
                </Space>
            </Col>
        </Row>
    )
}

export default SemesterInfo;