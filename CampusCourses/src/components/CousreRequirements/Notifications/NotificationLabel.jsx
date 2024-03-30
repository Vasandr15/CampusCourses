import { Badge } from "antd";

const NotificationLabel = ({ notifications }) => {

    return (
        <>
            Уведомления <Badge count={notifications ? notifications.length : 0} overflowCount={9} />
        </>
    );
}

export default NotificationLabel;
