import HeaderSection from "../components/Header/Header.jsx";
import {Outlet} from 'react-router-dom'
import {NotificationProvider} from "../providers/NotificationProvider.jsx";
import {Provider} from "react-redux";
import store from "../store.js";
import ProtectedRoute from "../providers/ProtectedRoute.jsx";

function Layout() {

    return (
        <>
            <Provider store={store}>
                <NotificationProvider>
                    <HeaderSection/>
                    <Outlet/>
                </NotificationProvider>
            </Provider>
        </>
    )
}

export default Layout
