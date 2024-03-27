import {Typography, Space} from "antd";

const {Text} = Typography
const RequestsInfo = ({studentsInQueueCount}) => {
    return (
        <Space direction={"vertical"}>
            <Text strong>Заявок на рассмотрении:</Text>
            <Text>{studentsInQueueCount}</Text>
        </Space>
    )
}

export default RequestsInfo;
