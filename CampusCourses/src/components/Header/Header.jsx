import {Layout, Menu} from 'antd';
import {useState, useEffect} from 'react';
import styles from '../Header/header.module.css';
import {getRoles} from '../../API/Users/getRoles.js';
import {getProfile} from '../../API/User/getProfile.js';
import {useLocation, useNavigate} from "react-router-dom";
import {routes} from "../../consts/routes.js";
import {postLogout} from "../../API/User/postLogout.js";
import {setRoles} from "../../actions/rolesActions.js";
import {useDispatch, useSelector} from 'react-redux';
import {setEmail} from "../../actions/emailAction.js";
import {setAuth} from "../../actions/authorizationAction.js";

const {Header} = Layout;

const HeaderSection = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const roles = useSelector(state => state.roles.roles);
    const email = useSelector(state => state.email.email);
    const isAuth = useSelector(state => state.isAuth.isAuth)

    useEffect(() => {
        const fetchData = async () => {
            if(isAuth){
                const rolesData = await getRoles();
                const profileInfo = await getProfile()
                dispatch(setEmail(profileInfo.email))
                dispatch(setRoles(rolesData));
            }
        };

        fetchData();
    }, [location]);

    const logout = async () => {
        let response = await postLogout();
        setTimeout(() => {
            if (response.status === 200) {
                dispatch(setAuth(false))
                localStorage.clear()
                navigate(routes.login());
            }
        }, 500)
    };

    const generateMenuItems = () => {

        let menuItems = [{key: 'main', label: 'Главная'}];
        if (isAuth && roles && email) {
            menuItems.push({key: 'groupOgCourses', label: 'Группы курсов'});
            if (roles.isStudent) {
                menuItems.push({key: 'studentCourses', label: 'Мои курсы'});
            }
            if (roles.isTeacher) {
                menuItems.push({key: 'teachingCourses', label: 'Преподаваемые курсы'});
            }
            menuItems.push(
                {key: 'profile', label: `${email}`, style: {marginLeft: 'auto'}},
                {key: 'logout', label: 'Выйти', danger: true, onClick: logout}
            );
        } else {
            menuItems.push(
                {key: 'registration', label: 'Регистрация', style: {marginLeft: 'auto'}},
                {key: 'login', label: 'Вход'}
            );
        }

        return menuItems;
    };

    const menuItems = generateMenuItems();
    console.log(menuItems)
    const menuRoutes = {
        main: routes.root(),
        groupOgCourses: routes.groups(),
        studentCourses: routes.my(),
        teachingCourses: routes.teaching(),
        profile: routes.profile(),
        registration: routes.registration(),
        login: routes.login(),
    };

    const pathToKey = Object.keys(menuRoutes).reduce((acc, key) => {
        const path = menuRoutes[key];
        acc[path] = key;
        return acc;
    }, {});

    const handleMenuClick = (e) => {
        const path = menuRoutes[e.key];
        if (path) navigate(path);
    };

    const currentKey = pathToKey[location.pathname];

    return (
        <Header className={styles.header}>
            <Menu
                theme="dark"
                mode="horizontal"
                items={menuItems}
                selectedKeys={[currentKey]}
                onClick={handleMenuClick}
                style={{flex: 1}}
            />
        </Header>
    );
};

export default HeaderSection;
