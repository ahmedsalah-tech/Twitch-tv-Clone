import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login as loginRequest } from '../../api';
import toast from 'react-hot-toast';

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const login = async (email: string, password: string) => {
    setIsLoading(true);

    const response = await loginRequest({
      email,
      password,
    });

    setIsLoading(false);

    if ('error' in response) {
      const data = response.exception.response?.data;
      const msg =
        (typeof data === 'string' ? data : data?.message) ||
        response.exception.message;
      return toast.error(
        msg || 'Error occurred while logging in. Please try again'
      );
    }

    if (response.data) {
      const { userDetails } = response.data;

      localStorage.setItem('user', JSON.stringify(userDetails));

      navigate('/channels');
    }
  };

  return {
    login,
    isLoading,
  };
};
