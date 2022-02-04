export enum FieldValidationMessage { 
    IncorrectEmailAndPasswordCombination = 'The email address or password is incorrect',
    invalidEmail = 'Must be valid email',
    TooShortPassword = 'Password must be at least of 6 characters in length',
    TooLongPassword = 'Password must be at most of 100 characters in length',
    RequiredField = 'Required'
}