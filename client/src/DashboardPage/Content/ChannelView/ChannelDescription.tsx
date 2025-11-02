import React from "react";
import type { ChannelDescriptionProps as Props } from '../../../types/types';
import type { FollowButtonProps } from '../../../types/types';
import { useUserDetails, useFollowChannel } from "../../../shared/hooks";


const FollowButton = ({ channelId, getChannels , className }: FollowButtonProps & { className?: string }) => {
    const { followChannel } = useFollowChannel()

    const handleFollowChannel = () => {
        followChannel(channelId, getChannels)
    }

    return <button onClick={handleFollowChannel} className={className}>Follow</button>
}

export const ChannelDescription: React.FC<Props> = ({
    username,
    title,
    description,
    channelId, 
    getChannels,
}) => {
    const { isLogged } = useUserDetails();

    return (
        <div className="channel-description-container">
            <span className="channel-description-title">
                {username}
                <span>
                    {isLogged && channelId && getChannels && <FollowButton className="channel-follow-button" channelId={channelId} getChannels={getChannels}/>}
                </span>
            </span>
            <span className="channel-description-subtitle">{title}</span>
            <div className="channel-description-box">
                <span className="channel-description">{description}</span>
            </div>
        </div>
    );
};