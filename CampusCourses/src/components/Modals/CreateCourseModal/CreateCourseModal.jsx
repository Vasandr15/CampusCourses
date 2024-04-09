import { Button, DatePicker, Form, Input, Modal, Radio, Select, Space } from "antd";
import { useEffect, useState } from "react";
import NumericInput from "../../NumericInput/NumericInput.jsx";
import { getUsers } from "../../../API/Users/getUsers.js";
import 'react-quill/dist/quill.snow.css'
import {postCreateCourse} from "../../../API/Course/postCreateCourse.js";
import {semesters} from "../../../consts/Semesters.js";
import {semestersRu} from "../../../consts/SemestersRu.js";
import {useNotification} from "../../../providers/NotificationProvider.jsx";
import {notificationTypes} from "../../../consts/notificationTypes.js";
import {notificationText} from "../../../consts/notificationText.js";
import dayjs from "dayjs";
import {Validations} from "../../../consts/validationRules.js";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'


const CreateCourseModal = ({id, isModalOpen, setIsModalOpen, updateCourses }) => {
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();
    const [users, setUsers] = useState([])
    const [maximumStudentsCount, setMaximumStudentsCount] = useState('');
    const {notify} = useNotification();

    const handleMaximumStudentsCountChange = (value) => {
        setMaximumStudentsCount(value);
    };


    const onFinish =  async (values) => {
        values.startYear = values.startYear.$y
        console.log(values);
        setLoading(true);
        let response = await postCreateCourse(id, values);
        setTimeout(() => {
            setLoading(false);
            if (response) {
                notify(notificationTypes.success(), notificationText.createCourse.Success())
                updateCourses();
                form.resetFields()
                setIsModalOpen(false);
            }
            else{
                notify(notificationTypes.error(), notificationText.createCourse.Fail())
            }

        }, 500);
    };

    const fetchUsers = async () => {
        if(isModalOpen){
            const users = await getUsers();
            if (users) {
                const formattedUsers = users.map(user => ({
                    value: user.id,
                    label: `${user.fullName}`
                }));
                setUsers(formattedUsers);
            } else {
                notify(notificationTypes.error(), notificationText.fetchUsers.Fail())
            }
        }
    }

    useEffect(() => {
        fetchUsers()
    }, [isModalOpen]);

    const handleOk = () => {
        form.submit();
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        form.resetFields()
    };

    const footer = [
        <Button key="cancel" onClick={handleCancel}>
            Отменить
        </Button>,
        <Button key="create" htmlType="submit" type="primary" loading={loading} onClick={handleOk}>
            Создать курс
        </Button>
    ];

    return (
        <Modal width={750} open={isModalOpen} footer={footer} onCancel={handleCancel} title="Создание курса">
            <Form form={form} name="courseCreation" onFinish={onFinish} layout="vertical">
                <Form.Item name='name' label="Название курса" rules={Validations.courseValidation()}>
                    <Input placeholder={'Название курса'}/>
                </Form.Item>
                <Space direction="horizontal" wrap={true} style={{justifyContent: 'space-between', display: "flex"}}>
                    <Form.Item name="startYear" label="Год начала курса" rules={Validations.courseValidation()}>
                        <DatePicker minDate={dayjs()} picker="year" placeholder="Выберете год"/>
                    </Form.Item>
                    <Form.Item name="maximumStudentsCount" label="Общее кол-во мест" rules={Validations.courseValidation()}>
                        <NumericInput value={maximumStudentsCount} onChange={handleMaximumStudentsCountChange} />
                    </Form.Item>
                    <Form.Item name="semester" label="Семестр" rules={Validations.courseValidation()}>
                        <Radio.Group>
                            <Radio value={semesters.autumn()}>{semestersRu.autumn()}</Radio>
                            <Radio value={semesters.spring()}>{semestersRu.spring()}</Radio>
                        </Radio.Group>
                    </Form.Item>
                </Space>
                <Form.Item name="requirements" label="Требования" rules={Validations.courseValidation()}>
                    <ReactQuill theme={"snow"} />
                </Form.Item>
                <Form.Item name="annotations" label="Аннотации" rules={Validations.courseValidation()}>
                    <ReactQuill theme={"snow"} />
                </Form.Item>
                <Form.Item name="mainTeacherId" label="Оновной преподаватель курса" rules={Validations.courseValidation()}>
                    <Select showSearch
                            placeholder="Найти преподавателя"
                            optionFilterProp="children"
                            filterOption={(input, option) => (option?.label ?? '').includes(input)}
                            filterSort={(optionA, optionB) =>
                                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                            }
                            options={users}/>
                </Form.Item>
            </Form>
        </Modal>
    );
}

export default CreateCourseModal;
