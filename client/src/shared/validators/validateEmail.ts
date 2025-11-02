export const validateEmail = (email: string): boolean => {
    const regex = /\S+@\S+\.\S+/;  
    return regex.test(email);
};

export const emailValidationMessage = 'Please enter a valid email address.';