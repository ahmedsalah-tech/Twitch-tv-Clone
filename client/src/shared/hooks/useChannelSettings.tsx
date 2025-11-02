import { useEffect, useState } from "react"
import { getChannelSettings, updateChannelSettings } from "../../api";
import toast from "react-hot-toast";
import type { ChannelSettings, SaveSettingsData } from "../../types/types";

export const useChannelSettings = () => {
    const [channelSettings, setChannelSettings] = useState<ChannelSettings | null>(null);

    const fetchChannelSettings = async () => {
        const response =  await getChannelSettings();

        if ('error' in response) {
            return toast.error(
                response.exception?.response?.data?.message || 'Error occured while fetching channel settings'
            );
        }

        setChannelSettings({
            username: response.data.username,
            title: response.data.title,
            description: response.data.description,
            avatarUrl: response.data.avatarUrl,
            streamKey: response.data.streamKey,
        });
    };

    const saveSettings = async (data: SaveSettingsData) => {
        const response = await updateChannelSettings(data);

        if ('error' in response) {
            return toast.error(
                response.exception?.response?.data?.message || 'Error occured while saving channel details'
            );
        }

        toast.success('Channel settings saved successfully'); 
    }

    useEffect(() => {
        fetchChannelSettings()
    }, []);

    return {
        isFetching: !channelSettings,
        channelSettings,
        saveSettings,
    }
};