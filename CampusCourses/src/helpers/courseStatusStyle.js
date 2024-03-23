export const getStatusStyle = (status) =>{
    switch (status){
        case 'Created':
            return 'rgb(110, 110, 110)'
        case 'Started':
            return 'rgb(12, 89, 255)'
        case 'OpenForAssigning':
            return 'rgb(1,176,9)'
        case 'Finished':
            return 'rgb(248,46,46)'
    }
}