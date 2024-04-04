import { Layout, Menu } from 'antd';
import { useState, useEffect } from 'react';
import styles from '../Header/header.module.css';
import { getRoles } from '../../API/Users/getRoles.js';
import { getProfile } from '../../API/User/getProfile.js';
import { useLocation, useNavigate } from "react-router-dom";
import { routes } from "../../consts/routes.js";
import { postLogout } from "../../API/User/postLogout.js";
import { setRoles } from "../../actions/rolesActions.js";
import { connect } from 'react-redux';
import {setEmail} from "../../actions/emailAction.js";

const { Header } = Layout;

const HeaderSection = ({ roles, setRoles, setEmail }) => {
    const [profile, setProfile] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const rolesData = await getRoles();
                setRoles(rolesData);
                const profileData = await getProfile();
                setProfile(profileData);
                setEmail(profileData.email)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [setRoles]);

    const logout = async () => {
        await postLogout();
        setTimeout(() => {
            navigate(routes.login());
        }, 500)

    };

    const generateMenuItems = () => {
        let menuItems = [{ key: 'main', label: 'Главная' }];
        if (roles && profile) {
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

    const currentKey = pathToKey[location.pathname] ;

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

const mapStateToProps = (state) => ({
    roles: state.roles.roles
});

export default connect(mapStateToProps, { setRoles, setEmail})(HeaderSection);
