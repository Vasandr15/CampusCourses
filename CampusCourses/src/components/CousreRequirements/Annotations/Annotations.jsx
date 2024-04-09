import styles from './annotations.module.css'
import {useSelector} from "react-redux";
import {Skeleton} from "antd";

const Annotations = ({annotations}) => {
    const isLoading = useSelector(state => state.isLoading.isLoading)

    return (
        <div className={styles.container}>
            {isLoading ? <Skeleton active paragraph={{width: "100%", rows: 5}}/> :
                <div dangerouslySetInnerHTML={{__html: annotations}}/>}
        </div>
    )
}
export default Annotations