import React, { createContext, useContext, useState } from 'react';
import {getCourse} from "../API/Course/getCourse.js";

const CourseContext = createContext();

export const useCourse = () => useContext(CourseContext);

export const CourseProvider = ({ children }) => {
    const [courseInfo, setCourseInfo] = useState({});

    const updateCourseInfo = async (courseId) => {
        let course = await getCourse(courseId);
        if(course){
            setCourseInfo(course)
        }
    };

    return (
        <CourseContext.Provider value={{ courseInfo, updateCourseInfo }}>
            {children}
        </CourseContext.Provider>
    );
};
