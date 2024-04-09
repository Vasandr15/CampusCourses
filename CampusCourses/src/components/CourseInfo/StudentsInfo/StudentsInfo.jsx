import {Col, Row, Skeleton, Space, Typography} from "antd";
import {useSelector} from "react-redux";

const {Text} = Typography
const StudentsInfo = () => {
    const courseInfo = useSelector(state => state.courseInfo.courseInfo);
    const isLoading = useSelector(state => state.isLoading.isLoading)

    return (
        <Row>
            <Col md={12}>
                <Space direction={"vertical"}>
                    <Text strong>Всего мест:</Text>
                    {isLoading || !courseInfo ? <Skeleton.Input style={{width: 200}} active/> :
                        <Text>{courseInfo.maximumStudentsCount}</Text>}
                </Space>
            </Col>
            <Col md={12}>
                <Space direction={"vertical"}>
                    <Text strong>Студентов зачислено:</Text>
                    {isLoading || !courseInfo  ? <Skeleton.Input style={{width: 200}} active/> :
                        <Text>{courseInfo.studentsEnrolledCount}</Text>}
                </Space>
            </Col>
        </Row>
    )
}

export default StudentsInfo