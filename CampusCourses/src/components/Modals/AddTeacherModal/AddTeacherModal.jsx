import {Button, Modal, Select} from "antd";
import {useState} from "react";
import {postAddTeacher} from "../../../API/Course/postAddTeacher.js";
import {useCourse} from "../../../contexts/CourseProvider.jsx";

const AddTeacherModal = ({isModalOpen, setModalOpen}) =>{
    const {updateCourseInfo } = useCourse();
    const [users, setUsers] = useState([])
    const [teacher, setTeacher] = useState('')

    const fetchUsers = async () =>{
        // add api request
        setUsers([])
    }

    const handleOk = async () =>{
        let response = await postAddTeacher(teacher)
        if(response){
            //notify
            setModalOpen(false)
            let courseId = localStorage.getItem("currentCourseId")
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