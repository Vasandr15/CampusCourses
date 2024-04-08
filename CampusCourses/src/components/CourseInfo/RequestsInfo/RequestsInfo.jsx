import {Typography, Space} from "antd";
import {useSelector} from "react-redux";

const {Text} = Typography
const RequestsInfo = () => {
    const  courseInfo  = useSelector(state => state.courseInfo.courseInfo);


    return (
        <Space direction={"vertical"}>
            <Text strong>Заявок на рассмотрении:</Text>
            <Text>{courseInfo.studentsInQueueCount}</Text>
        </Space>
    )
}

export default RequestsInfo;
