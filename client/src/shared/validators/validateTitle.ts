export const validateTitle = (title: string) => {
  return title.length >= 3 && title.length <= 30;
};

export const titleValidationMessage =
  'Title should have between 3 and 30 characters';
