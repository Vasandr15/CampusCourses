import {Button, Modal, Select} from "antd";
import {useEffect, useState} from "react";
import {postAddTeacher} from "../../../API/Course/postAddTeacher.js";
import {getUsers} from "../../../API/Users/getUsers.js";
import {useParams} from "react-router-dom";
import {useNotification} from "../../../providers/NotificationProvider.jsx";
import {notificationTypes} from "../../../consts/notificationTypes.js";
import {notificationText} from "../../../consts/notificationText.js";
import {useDispatch} from "react-redux";
import {getCourseInfoAction} from "../../../actions/getCourseInfoAction.js";

const AddTeacherModal = ({ isModalOpen, setModalOpen }) => {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [teacher, setTeacher] = useState(null);
    const { courseId } = useParams();
    const { notify } = useNotification();
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchUsers = async () => {
            if (isModalOpen) {
                try {
                    const fetchedUsers = await getUsers();
                    if (fetchedUsers) {
                        const formattedUsers = fetchedUsers.map(user => ({
                            value: user.id,
                            label: `${user.fullName}`
                        }));
                        setUsers(formattedUsers);
                    } else {
                        notify(notificationTypes.error(), notificationText.fetchUsers.Fail());
                    }
                } catch (error) {
                    notify(notificationTypes.error(), notificationText.fetchUsers.Fail());
                }
            }
        };

        fetchUsers();
    }, [isModalOpen, notify]);

    const handleOk = async () => {
        console.log(teacher);
        try {
            setLoading(true);
            const response = await postAddTeacher(teacher, courseId);
            if (response) {
                notify(notificationTypes.success(), notificationText.addTeacher.Success());
                setModalOpen(false);
                dispatch(getCourseInfoAction(courseId));
            } else {
                notify(notificationTypes.error(), notificationText.addTeacher.Fail());
            }
        } catch (error) {
            notify(notificationTypes.error(), notificationText.addTeacher.Fail());
        } finally {
            setLoading(false);
        }
    };

    const handleCancel = () => {
        setTeacher(null);
        setModalOpen(false);
    };

    const footer = [
        <Button key="back" loading={loading} onClick={handleCancel}>Отменить</Button>,
        <Button type="primary" key="submit" onClick={handleOk}>Сохранить</Button>
    ];

    return (
        <Modal open={isModalOpen} title="Добавить преподавателя" onCancel={handleCancel} footer={footer}>
            <Select
                showSearch
                style={{ width: '100%' }}
                placeholder="Найти преподавателя"
                optionFilterProp="children"
                filterOption={(input, option) => (option?.label ?? '').includes(input)}
                filterSort={(optionA, optionB) =>
                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                }
                options={users}
                onChange={setTeacher}
                value={teacher}
            />
        </Modal>
    );
};

export default AddTeacherModal;
