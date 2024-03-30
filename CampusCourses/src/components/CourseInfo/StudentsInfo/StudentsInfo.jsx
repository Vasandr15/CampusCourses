import {Col, Row, Space, Typography} from "antd";
import {useCourse} from "../../../contexts/CourseProvider.jsx";

const {Text} = Typography
const StudentsInfo = ()=>{
    const { courseInfo } = useCourse();

    return(
        <Row>
            <Col md={12}>
                <Space direction={"vertical"}>
                    <Text strong>Всего мест:</Text>
                    <Text>{courseInfo.maximumStudentsCount}</Text>
                </Space>
            </Col>
            <Col md={12}>
                <Space direction={"vertical"}>
                    <Text strong>Студентов зачислено:</Text>
                    <Text>{courseInfo.studentsEnrolledCount}</Text>
                </Space>
            </Col>
        </Row>
    )
}

export default StudentsInfo