import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {LoginPage} from "./pages/LoginPage.jsx";
import {NotificationProvider} from "./contexts/NotificationContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <NotificationProvider>
          <LoginPage/>
      </NotificationProvider>
  </React.StrictMode>,
)
