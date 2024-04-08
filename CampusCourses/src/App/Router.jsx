import {createBrowserRouter, Outlet} from "react-router-dom";
import Layout from "./Layout.jsx";
import {routes} from "../consts/routes.js";
import MainPage from "../pages/MainPage/MainPage.jsx";
import {LoginPage} from "../pages/LoginPage/LoginPage.jsx";
import {RegistrationPage} from "../pages/RegistrationPage/RegistrationPage.jsx";
import ProfilePage from "../pages/ProfilePage/ProfilePage.jsx";
import GroupsOfCoursesPage from "../pages/GroupsOfCoursesPage/GroupsOfCoursesPage.jsx";
import MyCourses from "../pages/MyCourses/MyCourses.jsx";
import CoursePage from "../pages/CoursePage/CoursePage.jsx";
import CoursesPage from "../pages/CoursesPage/CoursesPage.jsx";
import TeachingCourses from "../pages/TeachingCourses/TeachingCourses.jsx";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage.jsx";
import ProtectedRoute from "../providers/ProtectedRoute.jsx";
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                element: (
                    <ProtectedRoute>
                        <Outlet/>
                    </ProtectedRoute>
                ),
                children:[
                    {
                        path: routes.profile(),
                        element: <ProfilePage/>
                    },
                    {
                        path: routes.groups(),
                        element: <GroupsOfCoursesPage/>
                    },
                    {
                        path: routes.my(),
                        element: <MyCourses/>
                    },
                    {
                        path: routes.group(),
                        element: <CoursesPage />
                    },
                    {
                        path: routes.teaching(),
                        element: <TeachingCourses />
                    },
                    {
                        path: routes.course(),
                        element: <CoursePage />
                    },
                ]
            },
            {
                path: routes.root(),
                element: <MainPage/>
            },
            {
                path: routes.login(),
                element: <LoginPage/>
            },
            {
                path: routes.registration(),
                element: <RegistrationPage/>
            },
        ],
    },
    {
        path: '*',
        element: <NotFoundPage/>
    }
])


