import {Col, Row, Space, Typography} from "antd";
import {useCourse} from "../../../CourseProvider/CourseProvider.jsx";

const {Text} = Typography
const SemesterInfo = () =>{

    const { courseInfo } = useCourse();
    return(
        <Row>
            <Col md={12}>
                <Space direction={"vertical"}>
                    <Text strong>Учебный год:</Text>
                    <Text>{courseInfo.startYear}</Text>{/* add function to get proper year*/}
                </Space>
            </Col>
            <Col md={12}>
                <Space direction={"vertical"}>
                    <Text strong>Семестр:</Text>
                    <Text>{courseInfo.semester}</Text>{/* add function to get proper semester*/}
                </Space>
            </Col>
        </Row>
    )
}

export default SemesterInfo;