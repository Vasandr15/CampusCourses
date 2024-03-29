import {Button, List, Space, Tag} from "antd";
import styles from '../Notifications/notifications.module.css'
import {WarningFilled} from "@ant-design/icons";
import {useState} from "react";
import CreateNotificationModal from "../../Modals/CreateNotificationModal/CreateNotificationModal.jsx";
const Notifications = ({notifications}) =>{

    const [isModalOpen, setModalOpen] = useState(false)

    const handleClick = () =>{
        setModalOpen(true)
    }

    return(
        <>
            <Space>
                <Button type="primary" onClick={handleClick}>Добавить уведомление</Button>
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
            <CreateNotificationModal setModalOpen={setModalOpen} isModalOpen={isModalOpen}/>
        </>
    )
}

export default Notifications