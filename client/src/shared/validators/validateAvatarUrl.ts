export const validateAvatarUrl = (url: string) => {
  const regex = /^(ftp|http|https):\/\/[^ "]+$/;

  return regex.test(url);
};

export const avatarUrlValidationMessage = 'Please enter a valid URL';
