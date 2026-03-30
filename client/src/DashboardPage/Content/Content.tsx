import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Channels } from './Channels';
import { ChannelView } from './ChannelView';
import { Settings } from './Settings';
import type { Channel } from '../../types/types';

interface ContentProps {
  channels: Channel[];
  getChannels?: () => void;
}

export const Content: React.FC<ContentProps> = ({ channels, getChannels }) => {
  return (
    <div className="content-container">
      <Routes>
        <Route path="settings" element={<Settings />} />
        <Route path="channels" element={<Channels channels={channels} />} />
        <Route
          path="channel/:id"
          element={<ChannelView getChannels={getChannels} />}
        />
      </Routes>
    </div>
  );
};
