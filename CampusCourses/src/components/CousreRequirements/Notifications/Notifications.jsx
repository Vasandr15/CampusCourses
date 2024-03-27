import {Button, List, Space, Tag} from "antd";
import styles from '../Notifications/notifications.module.css'
import {WarningFilled} from "@ant-design/icons";
const Notifications = ({notifications}) =>{
    return(
        <>
            <Space>
                <Button type="primary">Добавить уведомление</Button>
            </Space>
            <div className={styles.container}>
                <List dataSource={notifications}
                      renderItem={(item) => (
                          <List.Item>
                              {item.isImportant ? (<Tag icon={<WarningFilled/>} color="red"/>) : null}
                              {item.text}
                          </List.Item>
                      )}/>
            </div>
        </>
    )
}

export default Notifications