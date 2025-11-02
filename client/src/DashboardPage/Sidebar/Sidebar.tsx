import React from "react";
import { type Channel } from "../../types/types";

const followedChannels = [
  {
    id: 1,
    username: "Ahmed",
    isOnline: false,
  },
  {
    id: 2,
    username: "Mohammed",
    isOnline: true,
  },
  {
    id: 3,
    username: "Sarah",
    isOnline: false,
  },
];

export const Sidebar = ({ channels }: { channels: Channel[] }) => {
  if (!channels) {
    return null;
  }

  return (
    <div className="sidebar-container">
      <span className="sidebar-title">For you</span>
      <span className="sidebar-subtitle">FOLLOWED CHANNELS</span>
      {channels.map((channel) => {
        return (
          <div key={channel.id} className="sidebar-list-item">
            <span className="sidebar-list-username">{channel.username}</span>
            <span
              className="sidebar-list-status"
              style={{
                color: channel.isOnline ? "green" : "red",
              }}
            >
              {channel.isOnline ? "Online" : "Offline"}
            </span>
          </div>
        );
      })}
    </div>
  );
};
