import {Card, Col, Row, Space, Typography} from 'antd';
import {getCourseStatus} from "../../helpers/courseStatus.js";
import {getCourseYear} from "../../helpers/courseYear.js";
import {getCourseSemester} from "../../helpers/courseSemester.js";
import styles from './listItem.module.css'
import {getStatusStyle} from "../../helpers/courseStatusStyle.js";

const {Title, Text} = Typography;

const ListItem = ({course}) => {
    return (
        <Card hoverable title={course.name} style={{ width: '300%' }}>
        <Row>
                <Col>
                    <Space direction="vertical">
                        <Text>Учебный год - {getCourseYear(course.startYear)}</Text>
                        <Text>Семестр - {getCourseSemester(course.semester)}</Text>
                        <Text type="secondary">Мест всего - {course.maximumStudentsCount}</Text>
                        <Text type="secondary">Мест свободно - {course.remainingSlotsCount}</Text>
                    </Space>
                </Col>
                <Col style={{marginLeft: 'auto'}}>
                    <Text strong style={{color: getStatusStyle(course.status)}}>{getCourseStatus(course.status)}</Text>
                </Col>
            </Row>
        </Card>
    );
};

export default ListItem;
