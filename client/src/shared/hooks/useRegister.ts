import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register as registerRequest } from '../../api';
import toast from 'react-hot-toast';

export const useRegister = () => {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const register = async (
    email: string,
    password: string,
    username: string
  ) => {
    setIsLoading(true);

    const response = await registerRequest({
      email,
      password,
      username,
    });

    setIsLoading(false);

    if ('error' in response) {
      const data = response.exception.response?.data;
      const msg =
        (typeof data === 'string' ? data : data?.message) ||
        response.exception.message;
      return toast.error(
        msg || 'Error occurred while signing up. Please try again'
      );
    }

    if (response.data) {
      const { userDetails } = response.data;

      localStorage.setItem('user', JSON.stringify(userDetails));

      navigate('/channels');
    }
  };

  return {
    register,
    isLoading,
  };
};
