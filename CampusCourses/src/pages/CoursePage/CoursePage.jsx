import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {setCurrentCourseUserRole} from '../../actions/currentCourseUserRoleAction';
import {getCurrentCourseUserRole} from '../../helpers/getCurrentCourseUserRole';
import {currentCourseRoles} from '../../consts/currentCourseRoles';
import {useParams} from 'react-router-dom';
import CourseInfo from '../../components/CourseInfo/CourseInfo';
import CourseRequirements from '../../components/CousreRequirements/CourseRequirements';
import CourseUsers from '../../components/CourseUsers/CourseUsers';
import EditCourseModal from '../../components/Modals/EditCourseModal/EditCourseModal';
import RequirementsAndAnnotationsEditModal
    from '../../components/Modals/RequirementsAndAnnotationEditModal/RequirementsAndAnnotationsEditModal';
import {Button, Card, Space, Typography} from 'antd';
import styles from './course.module.css';
import {useCourse} from "../../providers/CourseProvider.jsx";
import {useNotification} from "../../providers/NotificationProvider.jsx";
import {notificationTypes} from "../../consts/notificationTypes.js";
import {notificationText} from "../../consts/notificationText.js";

const {Title} = Typography;

const CoursePage = ({roles, email, setCurrentCourseUserRole, currentCourseRole}) => {
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const [isFullEditModalOpen, setFullEditModalOpen] = useState(false);
    const {courseInfo, updateCourseInfo} = useCourse()
    const {courseId} = useParams();
    const {notify} = useNotification()

    const fetchInfo = async () => {
        updateCourseInfo(courseId);
        const role = await getCurrentCourseUserRole(roles, courseId, courseInfo.teachers, email);
        console.log(role);
        setCurrentCourseUserRole(role);
        if (!courseInfo) {
            notify(notificationTypes.error(), notificationText.pageLoading.Fail())
        }
    };

    useEffect(() => {
        fetchInfo();
    }, []);

    const onEditClick = () => {
        if (roles.isAdmin) {
            setFullEditModalOpen(true);
        }
        if (currentCourseRole === currentCourseRoles.teacher()) {
            setEditModalOpen(true);
        }
    };

    return (
        <>
            <div className={styles.cardContainer}>
                <Card className={styles.card}>
                    <Title>{courseInfo.name}</Title>
                    <Space className={styles.info}>
                        <Title level={4}>Основные данные курса</Title>
                        {(roles.isAdmin || currentCourseRole === currentCourseRoles.teacher()) && (
                            <Button onClick={onEditClick}>Редактировать</Button>
                        )}
                    </Space>
                    <CourseInfo/>
                    <CourseRequirements/>
                    <CourseUsers/>
                </Card>
            </div>
            <RequirementsAndAnnotationsEditModal isModalOpen={isEditModalOpen} setModalOpen={setEditModalOpen}/>
            <EditCourseModal isModalOpen={isFullEditModalOpen} setIsModalOpen={setFullEditModalOpen}/>
        </>
    );
};

const mapStateToProps = (state) => ({
    roles: state.roles.roles,
    email: state.email.email,
    currentCourseRole: state.currentCourseRole.currentCourseRole,
});

export default connect(mapStateToProps, {setCurrentCourseUserRole})(CoursePage);
