import { useState } from 'react';
import { getChannelDetails as getChannelDetailsRequest } from '../../api/api';
import toast from 'react-hot-toast';
import { type ChannelDetails } from '../../types/types';
import { AxiosError } from 'axios';

export const useChannelDetails = () => {
  const [channelDetails, setChannelDetails] = useState<ChannelDetails | null>(
    null
  );

  const getChannelDetails = async (id: string) => {
    const responseData = await getChannelDetailsRequest(id);

    if ('error' in responseData) {
      const axiosErr = responseData.exception as AxiosError;
      const errorData = axiosErr?.response?.data as { message?: string };
      const message =
        typeof errorData === 'string' ? errorData : errorData?.message;
      return toast.error(
        message || 'Error occurred when fetching channel details'
      );
    }

    setChannelDetails(responseData.data);
  };

  return {
    channelDetails,
    isFetching: !channelDetails,
    getChannelDetails,
  };
};
