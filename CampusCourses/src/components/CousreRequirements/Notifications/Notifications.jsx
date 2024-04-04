import {Button, List, Space, Tag} from "antd";
import styles from '../Notifications/notifications.module.css'
import {WarningFilled} from "@ant-design/icons";
import {useState} from "react";
import CreateNotificationModal from "../../Modals/CreateNotificationModal/CreateNotificationModal.jsx";
import {connect} from "react-redux";
import {currentCourseRoles} from "../../../consts/currentCourseRoles.js";
const Notifications = ({notifications, roles, currentCourseRole}) =>{

    const [isModalOpen, setModalOpen] = useState(false)

    const handleClick = () =>{
        setModalOpen(true)
    }

    return(
        <>{
                roles.isAdmin || currentCourseRole === currentCourseRoles.teacher()
                || currentCourseRole === currentCourseRoles.mainTeacher() && (
                    <Space style={{marginBottom: '5px'}}>
                        <Button type="primary" onClick={handleClick}>Добавить уведомление</Button>
                    </Space>
                )
            }
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
const mapStateToProps = (state) => ({
    roles: state.roles.roles,
    currentCourseRole: state.currentCourseRole.currentCourseRole
});

export default connect(mapStateToProps) (Notifications);