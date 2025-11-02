import toast from "react-hot-toast";
import { followChannel as followChannelRequest } from "../../api";
import { AxiosError } from "axios";

export const useFollowChannel = () => {
    const followChannel = async (channelId: string, onSuccess: (followed: boolean) => void) => {
        const responseData = await followChannelRequest(channelId);

        if ('error' in responseData) {
            const axiosError = responseData.exception as AxiosError;
            const errorMessage = axiosError.response?.data as { message?: string };
            return toast.error(
                errorMessage?.message || 'Error occurred when trying to follow a channel'
            )
        };

        toast.success('Channel followed successfully');

        onSuccess(true);
    };

    return {
        followChannel,
    }
}