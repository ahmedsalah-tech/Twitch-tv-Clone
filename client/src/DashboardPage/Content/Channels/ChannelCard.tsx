import React from 'react';
import type { ChannelCardProps } from '../../../types/types';

const imageUrl =
  'https://img.goodfon.com/wallpaper/nbig/a/a5/gta-gta-v-gta-5-rockstar-game-5652.webp';

const ChannelAvatar = ({ url }: { url: string | null }) => {
  return (
    <div className="channels-avatar-container">
      <img src={url || imageUrl} width="100%" height="100%" />
    </div>
  );
};

export const ChannelCard = ({
  title,
  id,
  username,
  isOnline,
  avatarUrl,
  navigateToChannelHandler,
}: ChannelCardProps & {
  id: string;
  navigateToChannelHandler: (id: string) => void;
}) => {
  const handleNavigate = () => {
    navigateToChannelHandler(id);
  };

  return (
    <div className="channels-card" onClick={handleNavigate}>
      <ChannelAvatar url={avatarUrl} />
      <span className="channels-card-title">{title}</span>
      <span className="channels-card-text">{username}</span>
      <span
        className="channels-card-text"
        style={{ color: isOnline ? 'green' : 'red' }}
      >
        {isOnline ? 'Online' : 'Offline'}
      </span>
    </div>
  );
};
