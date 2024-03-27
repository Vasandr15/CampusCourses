import styles from "../StatusInfo/status.module.css";
import {Button, Space, Typography} from "antd";

const {Text} = Typography
const StatusInfo = ({status})=>{
    return(
        <Space className={styles.status}>
            <Space direction={"vertical"}>
                <Text strong>Статус курса: </Text>
                <Text>{status}</Text> {/*add function for getting status in russian and color*/}
            </Space>
            <Button>Изменить статус</Button>
        </Space>
    )
}

export default StatusInfo