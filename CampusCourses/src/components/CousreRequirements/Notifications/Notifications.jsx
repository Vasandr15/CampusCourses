import {Button, List, Space, Tag} from "antd";
import styles from '../Notifications/notifications.module.css'
import {WarningFilled} from "@ant-design/icons";
import {useState} from "react";
import CreateNotificationModal from "../../Modals/CreateNotificationModal/CreateNotificationModal.jsx";
import {useSelector} from "react-redux";
import {currentCourseRoles} from "../../../consts/currentCourseRoles.js";
import LoadingList from "../../LoadingList/LoadingList.jsx";

const Notifications = ({notifications}) => {

    const [isModalOpen, setModalOpen] = useState(false)
    const roles = useSelector(state => state.roles.roles)
    const currentCourseRole = useSelector(state => state.currentCourseRole.currentCourseRole)
    const isLoading = useSelector(state => state.isLoading.isLoading)

    const handleClick = () => {
        setModalOpen(true)
    }

    console.log(currentCourseRole)

    return (
        <>
            {
                ((roles && roles.isAdmin) || (currentCourseRole === currentCourseRoles.mainTeacher()) ||
                currentCourseRole === currentCourseRoles.teacher())
                && (
                    <Space style={{marginBottom: '5px'}}>
                        <Button type="primary" onClick={handleClick}>Добавить уведомление</Button>
                    </Space>
                )

            }
            <div className={styles.container}>
                {isLoading ? <LoadingList length={5} rows={2}/> :
                    <List dataSource={notifications}
                          renderItem={(item) => (
                              <List.Item>
                                  {item.isImportant ? (<Tag icon={<WarningFilled/>} color="red"/>) : null}
                                  {item.text}
                              </List.Item>
                          )}/>}
            </div>
            <CreateNotificationModal setModalOpen={setModalOpen} isModalOpen={isModalOpen}/>
        </>
    )
}

export default Notifications;