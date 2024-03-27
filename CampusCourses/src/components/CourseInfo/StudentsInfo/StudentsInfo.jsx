import {Col, Row, Space, Typography} from "antd";

const {Text} = Typography
const StudentsInfo = ({maximumStudentsCount, studentsEnrolledCount})=>{
    return(
        <Row>
            <Col md={12}>
                <Space direction={"vertical"}>
                    <Text strong>Всего мест:</Text>
                    <Text>{maximumStudentsCount}</Text>
                </Space>
            </Col>
            <Col md={12}>
                <Space direction={"vertical"}>
                    <Text strong>Студентов зачислено:</Text>
                    <Text>{studentsEnrolledCount}</Text>
                </Space>
            </Col>
        </Row>
    )
}

export default StudentsInfo