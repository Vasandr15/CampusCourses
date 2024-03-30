import React,{createContext, useContext, useState} from "react";
import {message} from "antd";

const NotificationContext = createContext();

export const useNotification = () => useContext(NotificationContext);

export const NotificationProvider = ({children})=>{
    const [messageApi, contextHolder] = message.useMessage();

    const notify = (type, content) =>{
        messageApi.open({
            type: type,
            content: content
        });
    }

    return(
        <NotificationContext.Provider value={{notify}}>
            {contextHolder}
            {children}
        </NotificationContext.Provider>
    )
}