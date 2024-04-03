import { Layout, Menu } from 'antd';
import { useState, useEffect } from 'react';
import styles from '../Header/header.module.css';
import { getRoles } from '../../API/Users/getRoles.js';
import { getProfile } from '../../API/User/getProfile.js';
import { useLocation, useNavigate } from "react-router-dom";
import { routes } from "../../consts/routes.js";
import {postLoginUser} from "../../API/User/postLoginUser.js";
import {postLogout} from "../../API/User/postLogout.js";

const { Header } = Layout;
const HeaderSection = () => {
    const [roles, setRoles] = useState(null);
    const [profile, setProfile] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        async function fetchData() {
            try {
                const rolesData = await getRoles();
                const profileData = await getProfile();
                setRoles(rolesData);
                setProfile(profileData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []);

    const logout = async ()=> {
        const response = await postLogout();
        navigate(routes.login())
    }

    const generateMenuItems = () => {
        let menuItems = [{ key: 'main', label: 'Главная' }];

        if (roles) {
            menuItems.push({ key: 'groupOgCourses', label: 'Группы курсов' });
            if (roles.isStudent) {
                menuItems.push({ key: 'studentCourses', label: 'Мои курсы' });
            }
            if (roles.isTeacher) {
                menuItems.push({ key: 'teachingCourses', label: 'Преподаваемые курсы' });
            }
            menuItems.push(
                { key: 'profile', label: `${profile.email}`, style: { marginLeft: 'auto' } },
                { key: 'logout', label: 'Выйти', danger: true, onClick: logout }
            );
        } else {
            menuItems.push(
                { key: 'registration', label: 'Регистрация', style: { marginLeft: 'auto' } },
                { key: 'login', label: 'Вход' }
            );
        }

        return menuItems;
    };

    const menuItems = generateMenuItems();

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

    const currentKey = pathToKey[location.pathname] || 'main';

    return (
        <Header className={styles.header}>
            <Menu
                theme="dark"
                mode="horizontal"
                items={menuItems}
                selectedKeys={[currentKey]}
                onClick={handleMenuClick}
                style={{ flex: 1 }}
            />
        </Header>
    );
};

export default HeaderSection;
