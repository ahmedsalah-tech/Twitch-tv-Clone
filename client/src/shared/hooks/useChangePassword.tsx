import toast from "react-hot-toast";
import { changePassword as changePasswordRequest } from "../../api";
import { AxiosError } from "axios";
import { type ChangePasswordData } from "../../types/types";

export const usePasswordChange = () => {

    const changePassword = async (password: string, newPassword: string): Promise<void> => {
        const responseData = await changePasswordRequest({
            password,
            newPassword,
        } as ChangePasswordData);

        if ('error' in responseData) {
            toast.error(
                (responseData.exception as AxiosError<string>)?.response?.data || 'Error occurred while trying to change password. Please try again.'
            );
            return;
        }

        toast.success('Password changed successfully!');
    };

    return {
        changePassword,
    };
};