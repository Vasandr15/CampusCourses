import {Tabs} from "antd";
import Requirements from "./Requirements/Requirements.jsx";
import Annotations from "./Annotations/Annotations.jsx";
import NotificationLabel from "./Notifications/NotificationLabel.jsx";
import Notifications from "./Notifications/Notifications.jsx";

const CourseRequirements = ({requirements, annotations, notifications}) =>{

     const tabsItems = [
        {label: "Требования", key: 'requirements', children: <Requirements requirements={requirements}/> },
        {label: "Аннотации", key: 'annotations', children: <Annotations annotations={annotations}/> },
        {label: <NotificationLabel notifications={notifications}/>, key: 'notifications',
            children:<Notifications notifications={notifications}/> }]

    return(
        <Tabs centered items={tabsItems}></Tabs>
    )
}

export default CourseRequirements