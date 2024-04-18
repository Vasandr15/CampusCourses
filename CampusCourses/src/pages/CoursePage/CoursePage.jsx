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
import {Button, Card, Skeleton, Space, Typography} from 'antd';
import styles from './course.module.css';
import {useNotification} from "../../providers/NotificationProvider.jsx";
import {notificationTypes} from "../../consts/notificationTypes.js";
import {notificationText} from "../../consts/notificationText.js";
import {getCourseInfoAction} from "../../actions/getCourseInfoAction.js";
import {setLoading} from "../../actions/loadCourse.js";
import NotFoundPage from "../NotFoundPage/NotFoundPage.jsx";

const {Title} = Typography;

const CoursePage = () => {
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const [isFullEditModalOpen, setFullEditModalOpen] = useState(false);
    const dispatch = useDispatch()
    const email = useSelector(state => state.email.email)
    const roles = useSelector(state => state.roles.roles)
    const notFound = useSelector(state => state.notFound.notFound)
    const currentCourseRole = useSelector(state => state.currentCourseRole.currentCourseRole)
    const isLoading = useSelector(state => state.isLoading.isLoading)
    const {courseId} = useParams();
    const {notify} = useNotification()
    const courseInfo = useSelector(state => state.courseInfo.courseInfo)

    const fetchInfo = async () => {
        dispatch(setLoading(true))
        dispatch(getCourseInfoAction(courseId))
    };

    useEffect(() => {
        fetchInfo();
    }, [courseId]);

    useEffect(() => {
        if (courseInfo) {
            const fetchRole = async () => {
                const role = await getCurrentCourseUserRole(roles, courseId, courseInfo.teachers, email);
                console.log(role);
                dispatch(setCurrentCourseUserRole(role));
                dispatch(setLoading(false))
            };
            fetchRole();
        }
    }, [courseInfo, roles, courseId, dispatch,]);

    const onEditClick = () => {
        if (roles.isAdmin) {
            setFullEditModalOpen(true);
        } else if (currentCourseRole === currentCourseRoles.teacher() || currentCourseRole === currentCourseRoles.mainTeacher()) {
            setEditModalOpen(true);
        }
    };

    if(notFound){
        return <NotFoundPage/>
    }
    return (
        <>
            <div className={styles.cardContainer}>
                <Card className={styles.card}>
                    {!courseInfo || isLoading ? <Skeleton.Input style={{width: 200}} active/> : <Title>{courseInfo.name}</Title>}
                    <Space wrap className={styles.info}>
                        <Title level={4}>Основные данные курса</Title>
                        {((roles && roles.isAdmin) ||
                            currentCourseRole === currentCourseRoles.teacher() || currentCourseRole === currentCourseRoles.mainTeacher()) && (
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
