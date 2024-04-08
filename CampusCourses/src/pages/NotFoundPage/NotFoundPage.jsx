import React from 'react';
import { Button, Result } from 'antd';
import {useNavigate} from "react-router-dom";
import {routes} from "../../consts/routes.js";
const NotFoundPage = () => {
    const navigate = useNavigate()
    return(
        <>
            <Result
                status="404"
                title="404"
                subTitle="Извините, такой страницы не существует."
                extra={<Button type="primary" onClick={()=> navigate(routes.root())}>На главную</Button>}
            />
        </>
    );
}
export default NotFoundPage;
