import toast from 'react-hot-toast';
import { followChannel as followChannelRequest } from '../../api';
import { AxiosError } from 'axios';

export const useFollowChannel = () => {
	const followChannel = async (
		channelId: string,
		onSuccess: (followed: boolean) => void
	) => {
		const responseData = await followChannelRequest(channelId);

		if ('error' in responseData) {
			const axiosError = responseData.exception as AxiosError;
			const errorData = axiosError.response?.data as
				| string
				| { message?: string }
				| undefined;
			const errorMessage =
				typeof errorData === 'string' ? errorData : errorData?.message;

			return toast.error(
				errorMessage || 'Error occurred when trying to follow a channel'
			);
		}

		toast.success(responseData.data.message || 'Channel followed successfully');

		onSuccess(true);
	};

	return {
		followChannel,
	};
};
