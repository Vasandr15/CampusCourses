import {Typography, Space} from "antd";
import {useCourse} from "../../../CourseProvider/CourseProvider.jsx";

const {Text} = Typography
const RequestsInfo = () => {
    const { courseInfo } = useCourse();


    return (
        <Space direction={"vertical"}>
            <Text strong>Заявок на рассмотрении:</Text>
            <Text>{courseInfo.studentsInQueueCount}</Text>
        </Space>
    )
}

export default RequestsInfo;
