import {Typography, Space, Skeleton} from "antd";
import {useSelector} from "react-redux";

const {Text} = Typography
const RequestsInfo = () => {
    const courseInfo = useSelector(state => state.courseInfo.courseInfo);
    const isLoading = useSelector(state => state.isLoading.isLoading);


    return (
        <Space direction={"vertical"}>
            <Text strong>Заявок на рассмотрении:</Text>
            {isLoading || !courseInfo ? <Skeleton.Input style={{width: 200}} active/> :
                <Text>{courseInfo.studentsInQueueCount}</Text>}
        </Space>
    )
}

export default RequestsInfo;
