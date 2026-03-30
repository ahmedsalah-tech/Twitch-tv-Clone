import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Chat } from './Chat';
import { ChannelDescription } from './ChannelDescription';
import { useChannelDetails } from '../../../shared/hooks';
import { LoadingSpinner } from '../../../shared/components';

interface ChannelViewProps {
  getChannels?: () => void;
}

export const ChannelView = ({ getChannels }: ChannelViewProps) => {
  const { isFetching, getChannelDetails, channelDetails } = useChannelDetails();

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getChannelDetails(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (isFetching || !channelDetails) {
    return <LoadingSpinner />;
  }

  return (
    <div className="channel-container">
      <div className="channel-video-description-section">
        <div className="channel-offline-placeholder">
          <span>Channel is offline</span>
        </div>
        <ChannelDescription
          channelId={channelDetails.id}
          title={channelDetails.title}
          description={channelDetails.description}
          username={channelDetails.username}
          getChannels={getChannels}
        />
      </div>
      <Chat />
    </div>
  );
};
