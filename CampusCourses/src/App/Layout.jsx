import HeaderSection from "../components/Header/Header.jsx";
import {Outlet} from 'react-router-dom'
import {CourseProvider} from "../providers/CourseProvider.jsx";
import {NotificationProvider} from "../providers/NotificationProvider.jsx";

function Layout() {

    return (
        <>
            <NotificationProvider>
                <CourseProvider>
                    <HeaderSection/>
                    <Outlet/>
                </CourseProvider>
            </NotificationProvider>
        </>
    )
}

export default Layout
