import styles from './annotations.module.css'

const Annotations = ({annotations}) =>{
    return (
        <div className={styles.container}>
            <div dangerouslySetInnerHTML={{__html: annotations}}/>
        </div>
    )
}
export default Annotations