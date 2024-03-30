const FILL_IN = 'Заполните поле';
const MIN_6_LENGTH = 'Пароль должен быть минимум из 6 символов';
const MIN_1_DIGIT = 'Пароль должен содержать минимум 1 цифру';
const NORMAL_EMAIL = 'Введите действующий E-mail';
const MIN_1_DIGIT_REGEX = /.*[0-9].*/;

class Validation {
    static requireRule = (errorMessage) => ({
        required: true,
        message: errorMessage
    });

    static inputValidation = (regex, errorMessage) => ({
        pattern: regex,
        message: errorMessage
    });

    static typeValidation = (type, errorMessage) =>({
        type: type,
        message:errorMessage
    })

    static lengthValidation = (minLength, errorMessage) =>({
        min : minLength,
        message: errorMessage
    })
}

export const Validations = {

    emailValidation : () =>  [
        Validation.requireRule(FILL_IN),
        Validation.typeValidation('email',NORMAL_EMAIL)
    ],

    passwordValidation : () =>  [
        Validation.requireRule(FILL_IN),
        Validation.inputValidation(MIN_1_DIGIT_REGEX, MIN_1_DIGIT),
        Validation.lengthValidation(6, MIN_6_LENGTH)

    ],
}