import {Button, Modal, Select} from "antd";
import {useEffect, useState} from "react";
import {postAddTeacher} from "../../../API/Course/postAddTeacher.js";
import {useCourse} from "../../../providers/CourseProvider.jsx";
import {getUsers} from "../../../API/Users/getUsers.js";
import {useParams} from "react-router-dom";

const AddTeacherModal = ({isModalOpen, setModalOpen}) =>{
    const {updateCourseInfo } = useCourse();
    const [users, setUsers] = useState([])
    const [teacher, setTeacher] = useState('')
    const {courseId} = useParams()

    const fetchUsers = async () =>{
        const users = await getUsers()
        if(users) {
            setUsers(users)
        }
        else{
            //notify
        }
    }

    const handleOk = async () =>{
        let response = await postAddTeacher(teacher, courseId)
        if(response){
            //notify
            setModalOpen(false)
            updateCourseInfo(courseId)
        }
        else{
            //notify
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
        <Button key={"back"} onClick={handleCancel}>Отменить</Button>,
        <Button type={"primary"} key={"submit"} onClick={handleOk}>Сохранить</Button>
    ]

    return(
        <Modal open={isModalOpen} title={"Добавить преподавателя"} onCancel={handleCancel}>
            <Select showSearch style={{width: "100%"}}
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