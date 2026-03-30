export const validatePassword = (password: string): boolean => {
  const regex = /^\S{6,12}$/;
  return regex.test(password);
};

export const passwordValidationMessage =
  'Password should be between 6 and 12 characters. No spaces are allowed.';
