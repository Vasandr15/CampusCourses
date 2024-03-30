export const getCourseStatus = (status) =>{
    switch (status){
        case 'Created':
            return 'Создан'
        case 'Started':
            return 'В процессе обучения'
        case 'OpenForAssigning':
            return 'Открыт для записи'
        case 'Finished':
            return 'Закрыт'
    }
}