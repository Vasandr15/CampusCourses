import styles from '../Requirements/requirements.module.css'
import {useSelector} from "react-redux";
import {Skeleton} from "antd";

const Requirements = ({requirements}) => {
    const isLoading = useSelector(state => state.isLoading.isLoading)

    return (
        <div className={styles.container}>
            {isLoading ? <Skeleton active paragraph={{width: "100%", rows: 5}}/> :
                <div dangerouslySetInnerHTML={{__html: requirements}}/>}
        </div>
    )
}

export default Requirements