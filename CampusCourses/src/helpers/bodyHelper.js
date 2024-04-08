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

    console.log(values.birthDate)
    let birthDate = new Date(values.birthDate.toISOString());
    const timezoneOffsetInHours = birthDate.getTimezoneOffset() / 60;
    birthDate.setHours(birthDate.getHours() - timezoneOffsetInHours)
    values.birthDate = birthDate.toISOString();
}
