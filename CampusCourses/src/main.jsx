import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GroupsOfCoursesPage from "./pages/GroupsOfCoursesPage/GroupsOfCoursesPage.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GroupsOfCoursesPage/>
  </React.StrictMode>,
)
