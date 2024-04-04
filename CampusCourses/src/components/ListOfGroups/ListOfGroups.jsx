import GroupOfCourses from "../GroupOfCourses/GroupOfCourses.jsx";
import styles from './listOfGroups.module.css'

const ListOfGroups = ({groups, updateGroups}) =>{

    return(
        <div className={styles.groupsContainer}>
            {groups.map(group =>(
                <GroupOfCourses id={group.id} key={group.id} name={group.name}  updateGroups={updateGroups}/>
            ))}
        </div>
    )
}

export default ListOfGroups