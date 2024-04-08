import { Button, DatePicker, Form, Input, Modal, Radio, Select, Space } from "antd";
import { useEffect, useState } from "react";
import NumericInput from "../../NumericInput/NumericInput.jsx";
import ReactQuill from "react-quill";
import {semesters} from "../../../consts/Semesters.js";
import {semestersRu} from "../../../consts/SemestersRu.js";
import locale from 'antd/es/date-picker/locale/ru_RU.js';
import moment from 'moment';
import {YEAR_FORMAT} from "../../../consts/strings.js";
import {useSelector} from "react-redux";


const CreateCourseModal = ({ setIsModalOpen, isModalOpen }) => {
    const { courseInfo, updateCourse } = useSelector(state => state.courseInfo.courseInfo);
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();
    const [maximumStudentsCount, setMaximumStudentsCount] = useState('');

    const handleMaximumStudentsCountChange = (value) => {
        setMaximumStudentsCount(value);
    };

    const onFinish = async (values) => {
        values.startYear = values.startYear.$y
        console.log(values);

    };



    useEffect(() => {
        if (courseInfo) {
            form.setFieldsValue({
                name: courseInfo.name,
                startYear: moment( new Date(courseInfo.startYear, 0)),
                maximumStudentsCount: courseInfo.maximumStudentsCount,
                semester: courseInfo.semester,
                requirements: courseInfo.requirements,
                annotations: courseInfo.annotations
            });
        }
    }, [courseInfo, form]);

    const handleOk = () => {
        form.submit();
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const footer = [
        <Button key="cancel" onClick={handleCancel}>
            Отменить
        </Button>,
        <Button key="create" htmlType="submit" type="primary" loading={loading} onClick={handleOk}>
            Сохранить
        </Button>
    ];

    return (
        <Modal width={750} open={isModalOpen} footer={footer} onCancel={handleCancel} title="Редактирование курса">
            <Form form={form} name="courseCreation" onFinish={onFinish} layout="vertical">
                <Form.Item name='name' label="Название курса">
                    <Input placeholder={'Название курса'} />
                </Form.Item>
                <Space direction="horizontal" wrap={true} style={{justifyContent: 'space-between', display: "flex"}}>
                    <Form.Item name="startYear" label="Год начала курса">
                        <DatePicker picker={"year"} format={YEAR_FORMAT} placeholder="Выберете год" locale={locale}/>
                    </Form.Item>
                    <Form.Item name="maximumStudentsCount" label="Общее кол-во мест">
                        <NumericInput value={maximumStudentsCount} onChange={handleMaximumStudentsCountChange}/>
                    </Form.Item>
                    <Form.Item name="semester" label="Семестр">
                        <Radio.Group>
                            <Radio value={semesters.autumn()}>{semestersRu.autumn()}</Radio>
                            <Radio value={semesters.spring()}>{semestersRu.spring()}</Radio>
                        </Radio.Group>
                    </Form.Item>
                </Space>
                <Form.Item name="requirements" label="Требования">
                    <ReactQuill theme='snow' />
                </Form.Item>
                <Form.Item name="annotations" label="Аннотации">
                    <ReactQuill theme='snow' />
                </Form.Item>
            </Form>
        </Modal>
    );
}

export default CreateCourseModal;
