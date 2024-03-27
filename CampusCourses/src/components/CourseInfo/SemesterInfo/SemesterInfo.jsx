import {Col, Row, Space, Typography} from "antd";

const {Text} = Typography
const SemesterInfo = ({semester, startYear}) =>{

    return(
        <Row>
            <Col md={12}>
                <Space direction={"vertical"}>
                    <Text strong>Учебный год:</Text>
                    <Text>{startYear}</Text>{/* add function to get proper year*/}
                </Space>
            </Col>
            <Col md={12}>
                <Space direction={"vertical"}>
                    <Text strong>Семестр:</Text>
                    <Text>{semester}</Text>{/* add function to get proper semester*/}
                </Space>
            </Col>
        </Row>
    )
}

export default SemesterInfo;