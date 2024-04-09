import { Col, Row, Skeleton, Space, Typography } from "antd";
import { getCourseYear } from "../../../helpers/courseYear.js";
import { getCourseSemester } from "../../../helpers/courseSemester.js";
import { useSelector } from "react-redux";

const { Text } = Typography;

const SemesterInfo = () => {
    const courseInfo = useSelector(state => state.courseInfo.courseInfo);
    const isLoading = useSelector(state => state.isLoading.isLoading);

    return (
        <Row>
            <Col md={12}>
                <Space direction="vertical">
                    <Text strong>Учебный год:</Text>
                    {isLoading || !courseInfo ? (
                        <Skeleton.Input style={{ width: 200 }} active />
                    ) : (
                        <Text>{courseInfo?.startYear && getCourseYear(courseInfo.startYear)}</Text>
                    )}
                </Space>
            </Col>
            <Col md={12}>
                <Space direction="vertical">
                    <Text strong>Семестр:</Text>
                    {isLoading || !courseInfo ? (
                        <Skeleton.Input style={{ width: 200 }} active />
                    ) : (
                        <Text>{courseInfo?.semester && getCourseSemester(courseInfo.semester)}</Text>
                    )}
                </Space>
            </Col>
        </Row>
    );
};

export default SemesterInfo;
