export const getCourseSemester = (semester) => {
    switch (semester){
        case 'Autumn':
            return 'Осенний'
        case 'Spring':
            return 'Весенний'
    }
}