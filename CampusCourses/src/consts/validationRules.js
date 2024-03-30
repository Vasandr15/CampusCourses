import {
    CONFIRM_PASSWORD,
    DATE_NOT_TODAY,
    FILL_IN, MIN_1_DIGIT, MIN_1_DIGIT_REGEX, MIN_6_LENGTH, NORMAL_EMAIL,
    ONLY_LETTERS_MESSAGE,
    ONLY_LETTERS_REGEX,
    SAME_PASSWORDS
} from "./strings.js";

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

    nameValidationRules : () => [
        Validation.requireRule(FILL_IN),
        Validation.inputValidation(ONLY_LETTERS_REGEX,ONLY_LETTERS_MESSAGE )
    ],

    surnameValidationRules : () =>  [
        Validation.requireRule(FILL_IN),
        Validation.inputValidation(ONLY_LETTERS_REGEX, ONLY_LETTERS_MESSAGE)
    ],

    middleNameValidationRules : () =>  [
        Validation.inputValidation(ONLY_LETTERS_REGEX, ONLY_LETTERS_MESSAGE)
    ],

    confirmPasswordValidation : () =>  [
        Validation.requireRule(CONFIRM_PASSWORD),
        ({getFieldValue}) => ({
            validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                }
                return Promise.reject(new Error(SAME_PASSWORDS));
            },
        })
    ],

    birthDateValidationRules: () => [
        Validation.requireRule(FILL_IN),
        ({ getFieldValue }) => ({
            validator(_, value) {
                let currentDate = new Date();
                if (value && value > currentDate) {
                    return Promise.reject(DATE_NOT_TODAY);
                }
                return Promise.resolve();
            },
        }),
    ],

}
