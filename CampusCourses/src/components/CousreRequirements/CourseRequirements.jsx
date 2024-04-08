import {Tabs} from "antd";
import Requirements from "./Requirements/Requirements.jsx";
import Annotations from "./Annotations/Annotations.jsx";
import NotificationLabel from "./Notifications/NotificationLabel.jsx";
import Notifications from "./Notifications/Notifications.jsx";
import {useSelector} from "react-redux";

const CourseRequirements = () =>{

    const  courseInfo = useSelector(state => state.courseInfo.courseInfo);

    const tabsItems = [
        {label: "Требования", key: 'requirements', children: <Requirements requirements={courseInfo.requirements}/> },
        {label: "Аннотации", key: 'annotations', children: <Annotations annotations={courseInfo.annotations}/> },
        {label: <NotificationLabel notifications={courseInfo.notifications}/>, key: 'notifications',
            children:<Notifications notifications={courseInfo.notifications}/> }]

    return(
        <Tabs centered items={tabsItems}></Tabs>
    )
}

export default CourseRequirements