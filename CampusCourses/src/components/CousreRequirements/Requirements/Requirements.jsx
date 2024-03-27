import styles from '../Requirements/requirements.module.css'

const Requirements = ({requirements}) =>{
    return (
        <div className={styles.container}>
            <div dangerouslySetInnerHTML={{__html: requirements}}/>
        </div>
    )
}

export default Requirements