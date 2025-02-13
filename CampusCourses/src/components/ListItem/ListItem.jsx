import {Card, Col, Row, Space, Typography} from 'antd';
import {getCourseStatus} from "../../helpers/courseStatus.js";
import {getCourseYear} from "../../helpers/courseYear.js";
import {getCourseSemester} from "../../helpers/courseSemester.js";
import {getStatusStyle} from "../../helpers/courseStatusStyle.js";
import {useNavigate} from "react-router-dom";
import {routes} from "../../consts/routes.js";

const {Text} = Typography;

const ListItem = ({course}) => {
    const navigate = useNavigate()
    return (
        <Card hoverable title={course.name} style={{width: '100%'}} onClick={() => navigate(routes.course(course.id))}>
            <Space wrap style={{justifyContent: "space-between", display: "flex"}}>

                    <Space wrap direction="vertical">
                        <Text>Учебный год - {getCourseYear(course.startYear)}</Text>
                        <Text>Семестр - {getCourseSemester(course.semester)}</Text>
                        <Text type="secondary">Мест всего - {course.maximumStudentsCount}</Text>
                        <Text type="secondary">Мест свободно - {course.remainingSlotsCount}</Text>
                    </Space>
                <Space style={{marginLeft: 'auto'}}>
                    <Text strong style={{color: getStatusStyle(course.status)}}>{getCourseStatus(course.status)}</Text>
                </Space>
            </Space>
        </Card>
    );
};

export default ListItem;
