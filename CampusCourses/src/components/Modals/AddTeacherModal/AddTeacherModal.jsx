import {Button, Modal, Select} from "antd";
import {useEffect, useState} from "react";
import {postAddTeacher} from "../../../API/Course/postAddTeacher.js";
import {useCourse} from "../../../providers/CourseProvider.jsx";
import {getUsers} from "../../../API/Users/getUsers.js";
import {useParams} from "react-router-dom";
import {useNotification} from "../../../providers/NotificationProvider.jsx";
import {notificationTypes} from "../../../consts/notificationTypes.js";
import {notificationText} from "../../../consts/notificationText.js";

const AddTeacherModal = ({isModalOpen, setModalOpen}) =>{
    const {updateCourseInfo } = useCourse();
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState()
    const [teacher, setTeacher] = useState('')
    const {courseId} = useParams()
    const {notify} = useNotification()
    const fetchUsers = async () =>{
        const users = await getUsers()
        if(users) {
            const formattedUsers = users.map(user => ({
                value: user.id,
                label: `${user.fullName}`
            }));
            setUsers(formattedUsers);
        }
        else{
            notify(notificationTypes.error(), notificationText.fetchUsers.Fail())
        }
    }

    const handleOk = async () =>{
        console.log(teacher)
        let response = await postAddTeacher(teacher, courseId)
        if(response){
            notify(notificationTypes.success(),notificationText.addTeacher.Success() )
            setModalOpen(false)
            updateCourseInfo(courseId)
        }
        else{
            notify(notificationTypes.error(),notificationText.addTeacher.Fail() )
        }
    }

    const handleCancel = () =>{
        setTeacher('')
        setModalOpen(false)
    }

    useEffect(() => {
        fetchUsers()
    }, []);

    const footer =[
        <Button key={"back"} loading={loading} onClick={handleCancel}>Отменить</Button>,
        <Button type={"primary"} key={"submit"} onClick={handleOk}>Сохранить</Button>
    ]

    return(
        <Modal open={isModalOpen} title={"Добавить преподавателя"} onCancel={handleCancel} footer={footer}>
            <Select showSearch style={{width: '100%'}}
                    placeholder="Найти преподавателя"
                    optionFilterProp="children"
                    filterOption={(input, option) => (option?.label ?? '').includes(input)}
                    filterSort={(optionA, optionB) =>
                        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                    }
                    options={users} onChange={setTeacher}/>
        </Modal>
    )
}

export default AddTeacherModal