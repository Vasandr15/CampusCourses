import {Tabs} from "antd";
import Requirements from "./Requirements/Requirements.jsx";
import Annotations from "./Annotations/Annotations.jsx";
import NotificationLabel from "./Notifications/NotificationLabel.jsx";
import Notifications from "./Notifications/Notifications.jsx";
import {useCourse} from "../../CourseProvider/CourseProvider.jsx";

const CourseRequirements = () =>{

    const { courseInfo } = useCourse();

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