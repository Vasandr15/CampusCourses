import {Col, Row, Space, Typography} from "antd";
import {useCourse} from "../../../providers/CourseProvider.jsx";
import {getCourseYear} from "../../../helpers/courseYear.js";
import {getCourseSemester} from "../../../helpers/courseSemester.js";

const {Text} = Typography
const SemesterInfo = () =>{
    const { courseInfo } = useCourse();

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