import { getGroupsOfCourses } from "../API/Group/getGroupsOfCourses.js";

export const getGroupName = async (groupId) => {
    const groups = await getGroupsOfCourses();
    const group = groups.find(group => group.id === groupId);

    if (group) {
        return group.name;
    }
}