import { Button, DatePicker, Form, Input, Modal, Radio, Space } from "antd";
import { useEffect, useState } from "react";
import NumericInput from "../../NumericInput/NumericInput.jsx";
import ReactQuill from "react-quill";
import {semesters} from "../../../consts/Semesters.js";
import {semestersRu} from "../../../consts/SemestersRu.js";
import locale from 'antd/es/date-picker/locale/ru_RU.js';
import moment from 'moment';
import {YEAR_FORMAT} from "../../../consts/strings.js";
import {useDispatch, useSelector} from "react-redux";
import dayjs from "dayjs";
import {putEditCourse} from "../../../API/Course/putEditCourse.js";
import {useNotification} from "../../../providers/NotificationProvider.jsx";
import {notificationTypes} from "../../../consts/notificationTypes.js";
import {notificationText} from "../../../consts/notificationText.js";
import {getCourseInfoAction} from "../../../actions/getCourseInfoAction.js";
import {useParams} from "react-router-dom";
import {Validations} from "../../../consts/validationRules.js";


const CreateCourseModal = ({ setIsModalOpen, isModalOpen }) => {
    const  courseInfo  = useSelector(state => state.courseInfo.courseInfo);
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();
    const [maximumStudentsCount, setMaximumStudentsCount] = useState('');
    const {notify} = useNotification()
    const dispatch = useDispatch()
    const {courseId} = useParams()

    const handleMaximumStudentsCountChange = (value) => {
        setMaximumStudentsCount(value);
    };

    const onFinish = async (values) => {
        values.startYear = values.startYear.year()
        values.mainTeacherId = "3fa85f64-5717-4562-b3fc-2c963f66afa6"
        console.log(values);
        const response = await putEditCourse(courseId, values);
        if (response){
            notify(notificationTypes.success(), notificationText.editCourse.Success())
            dispatch(getCourseInfoAction(courseId))
            setIsModalOpen(false)
            form.resetFields()
        }
        else {
            notify(notificationTypes.error(), notificationText.editCourse.Fail())
        }
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
        form.resetFields()
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
                <Form.Item name='name' label="Название курса" rules={Validations.courseValidation()}>
                    <Input placeholder={'Название курса'} />
                </Form.Item>
                <Space direction="horizontal" wrap={true} style={{justifyContent: 'space-between', display: "flex"}}>
                    <Form.Item name="startYear" label="Год начала курса" rules={Validations.courseValidation()}>
                        <DatePicker maxDate={dayjs().add(20,"Year")} minDate={dayjs()} picker={"year"} format={YEAR_FORMAT} placeholder="Выберете год" locale={locale}/>
                    </Form.Item>
                    <Form.Item name="maximumStudentsCount" label="Общее кол-во мест" rules={Validations.courseValidation()}>
                        <NumericInput value={maximumStudentsCount} onChange={handleMaximumStudentsCountChange}/>
                    </Form.Item>
                    <Form.Item name="semester" label="Семестр" rules={Validations.courseValidation()}>
                        <Radio.Group>
                            <Radio value={semesters.autumn()}>{semestersRu.autumn()}</Radio>
                            <Radio value={semesters.spring()}>{semestersRu.spring()}</Radio>
                        </Radio.Group>
                    </Form.Item>
                </Space>
                <Form.Item name="requirements" label="Требования" rules={Validations.courseValidation()}>
                    <ReactQuill theme='snow' />
                </Form.Item>
                <Form.Item name="annotations" label="Аннотации" rules={Validations.courseValidation()}>
                    <ReactQuill theme='snow' />
                </Form.Item>
            </Form>
        </Modal>
    );
}

export default CreateCourseModal;
