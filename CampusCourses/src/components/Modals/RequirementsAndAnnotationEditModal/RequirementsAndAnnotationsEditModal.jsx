import {Button, Modal, Space, Typography} from "antd";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import {useState} from "react";
import {putChangeRequirementsAndAnnotations} from "../../../API/Course/putChangeRequirementsAndAnnotations.js";

const {Text} = Typography
const RequirementsAndAnnotationsEditModal = ({isModalOpen, setModalOpen, requirements, annotations}) => {

    const [newRequirements, setNewRequirements] = useState(requirements)
    const [newAnnotations, setNewAnnotations] = useState(annotations)
    const handleCancel = () =>{
        setModalOpen(false)
        setNewRequirements(requirements)
        setNewAnnotations(annotations)
    }

    const handleOk =  async () =>{
        let response = await putChangeRequirementsAndAnnotations(newRequirements, newAnnotations);
        if (response){
            setModalOpen(false)
            //notify
        }
        else{ // notify
        }
    }

    const footer =[
        <Button key={"back"} onClick={handleCancel}>Отменить</Button>,
        <Button type={"primary"} key={"submit"} onClick={handleOk}>Сохранить</Button>
    ]

    return (
        <Modal width={750} title={'Редактирование курса'} open={isModalOpen} footer={footer} onCancel={handleCancel}>
            <Space direction={"vertical"}>
                <Text>Требоания</Text>
                <ReactQuill theme={"snow"} onChange={setNewRequirements} value={newRequirements} /> {/*add editor container*/}
                <Text>Аннотации</Text>
                <ReactQuill theme={"snow"} onChange={setNewAnnotations} value={newAnnotations}/> {/*add editor container*/}
            </Space>
        </Modal>
    )
}

export default RequirementsAndAnnotationsEditModal

