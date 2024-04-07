import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
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

const CoursePage = () => {
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const [isFullEditModalOpen, setFullEditModalOpen] = useState(false);
    const {courseInfo, updateCourseInfo} = useCourse()
    const dispatch = useDispatch()
    const email = useSelector(state => state.email.email)
    const roles = useSelector(state => state.roles.roles)
    const currentCourseRole = useSelector(state => state.currentCourseRole.currentCourseRole)
    const {courseId} = useParams();
    const {notify} = useNotification()

    const fetchInfo = async () => {
        await updateCourseInfo(courseId);
        if (courseInfo) {
            try {
                const role = await getCurrentCourseUserRole(roles, courseId, courseInfo.teachers, email);
                console.log(role);
                dispatch(setCurrentCourseUserRole(role));
            } catch (error) {
                console.error('Error fetching current course user role:', error);
            }
        } else {
            notify(notificationTypes.error(), notificationText.pageLoading.Fail());
        }
    };


    useEffect(() => {
        fetchInfo();
    }, [ roles]);

    const onEditClick = () => {
        if (roles.isAdmin) {
            setFullEditModalOpen(true);
        }
        else if (currentCourseRole === (currentCourseRoles.teacher() || currentCourseRoles.mainTeacher())) {
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
                        {((roles && roles.isAdmin && currentCourseRole !== currentCourseRoles.student()) ||
                            currentCourseRole === (currentCourseRoles.teacher() || currentCourseRoles.mainTeacher()) ) && (
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

export default CoursePage;
