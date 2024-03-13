export const removeSpaces = (string) => {
    return string.replace(/\s/g, '')
}

export const cleanUpValues = (values) => {
    const cleanedName = removeSpaces(values.name);
    const cleanedSurname = removeSpaces(values.surname);
    let cleanedMiddleName;
    if (values.middleName) {
        cleanedMiddleName = removeSpaces(values.middleName);
    }

    values.fullName = `${cleanedSurname} ${cleanedName} ${cleanedMiddleName ? cleanedMiddleName : ''}`;

    delete values.name;
    delete values.surname;
    delete values.middleName;


    let birthDate = new Date(values.birthDate.toISOString());
    birthDate.setDate(birthDate.getDate() + 1)
    values.birthDate = birthDate.toISOString();
    console.log(values.birthDate)
}