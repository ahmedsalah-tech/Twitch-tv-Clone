import React from "react";
import { ChannelCard } from "./ChannelCard";
import { useNavigate } from "react-router-dom";
// import { dummyChannels } from "../../../shared/dummyData";

export const Channels = ({
  channels,
}: {
  channels: {
    id: string;
    title: string;
    username: string;
    isOnline: boolean;
    avatarUrl: string;
  }[];
}) => {
  const navigate = useNavigate();

  const handleNavigateToChannel = (id: string) => {
    navigate(`/channel/${id}`);
  };

  return (
    <div className="channels-container">
      {channels.map((c) => (
        <ChannelCard
          key={c.id}
          id={c.id}
          title={c.title}
          username={c.username}
          isOnline={c.isOnline}
          avatarUrl={c.avatarUrl}
          navigateToChannelHandler={() => handleNavigateToChannel(c.id)}
        />
      ))}
    </div>
  );
};
