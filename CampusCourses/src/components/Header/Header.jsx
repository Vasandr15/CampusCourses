import { Layout, Menu } from 'antd';
import { useState, useEffect } from 'react'; // Import useState and useEffect hooks
import styles from '../Header/header.module.css';
import { getRoles } from '../../API/getRoles.js';
import { getProfile } from '../../API/getProfile.js';

const { Header } = Layout;

localStorage.setItem(
    'token',
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJkZGMwMjVmOS1mOWIzLTQxYmUtMTJjZC0wOGRiMmU4YWNhZmEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9hdXRoZW50aWNhdGlvbiI6IjhjMGZhMGEyLWUzMzEtNDkzNC05OGU5LWU0OTMwODA1MmIzOCIsIm5iZiI6MTcxMDk1MDE2NSwiZXhwIjoxNzEwOTUzNzY1LCJpYXQiOjE3MTA5NTAxNjUsImlzcyI6IkNhbXB1c0NvdXJzZS5BUEkiLCJhdWQiOiJDYW1wdXNDb3Vyc2UuQVBJIn0.ZIJ7CuXzsNPRv0xss2zYX-jMTVmZ28gGfoWM2RPnLEo"
);

const HeaderSection = () => {
    const [roles, setRoles] = useState(null);
    const [profile, setProfile] = useState(null);

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

    let items = [{ key: 'main', label: 'Главная' }];

    if (roles) {
        items.push({ key: 'groupOgCourses', label: 'Группы курсов' });
        if (roles.isStudent) {
            items.push({ key: 'studentCourses', label: 'Мои курсы' });
        }
        if (roles.isTeacher) {
            items.push({ key: 'teacherCourses', label: 'Преподаваемые курсы' });
        }
        items.push(
            { key: 'profile', label: `${profile.email}`, style: { marginLeft: 'auto' } },
            { key: 'logout', label: 'Выйти', danger: true}
        );
    } else {
        items.push(
            { key: 'registration', label: 'Регистрация', style: { marginLeft: 'auto' } },
            { key: 'login', label: 'Вход' }
        );
    }

    return (
        <Header className={styles.header}>
            <Menu
                theme="dark"
                mode="horizontal"
                items={items}
                style={{flex: 1}}/>
        </Header>
    );
};

export default HeaderSection;
