import ProfileCard from "../../components/ProfileCard/ProfileCrad.jsx";
import {Flex} from "antd";
import styles from './profile.module.css'

const ProfilePage = () => {

    return (
        <>
            <Flex className={styles.profileContainer}>
                <ProfileCard/>
            </Flex>
        </>
    );
};

export default ProfilePage;
