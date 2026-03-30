export const logout = () => {
  localStorage.removeItem('user');

  // it will cuase page refresh
  window.location.href = '/channels';
};
