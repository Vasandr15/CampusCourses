import HeaderSection from "../components/Header/Header.jsx";
import {Outlet} from 'react-router-dom'
import {CourseProvider} from "../providers/CourseProvider.jsx";
import {NotificationProvider} from "../providers/NotificationProvider.jsx";
import {Provider} from "react-redux";
import store from "../store.js";

function Layout() {

    return (
        <>
            <Provider store={store}>
                <NotificationProvider>
                    <CourseProvider>
                        <HeaderSection/>
                        <Outlet/>
                    </CourseProvider>
                </NotificationProvider>
            </Provider>
        </>
    )
}

export default Layout
