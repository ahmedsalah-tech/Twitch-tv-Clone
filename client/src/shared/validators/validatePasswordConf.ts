export const validatePasswordConf = (pass: string, confPass: string): boolean => {
    return pass === confPass;
};

export const passwordConfValidationMessage = 'Password do not match.';