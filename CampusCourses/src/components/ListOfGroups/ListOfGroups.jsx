import GroupOfCourses from "../GroupOfCourses/GroupOfCourses.jsx";
import styles from './listOfGroups.module.css'
import {useEffect, useState} from "react";
import {getGroupsOfCourses} from "../../API/getGroupsOfCourses.js";

const ListOfGroups = ({admin}) =>{
    const [groups,setGroups ] = useState([]);

    useEffect(() => {
        fetchInfo();
    }, []);

    const fetchInfo = async () => {
        const result = await getGroupsOfCourses();
        if (result){
            setGroups(result)
        }
        else{
            //notify
        }
    };

    return(
        <div className={styles.groupsContainer}>
            {groups.map(group =>(
                <GroupOfCourses key={group.id} name={group.name} admin={admin}/>
            ))}
        </div>
    )
}

export default ListOfGroups