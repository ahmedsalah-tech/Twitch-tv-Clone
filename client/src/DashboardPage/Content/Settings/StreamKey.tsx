import React from 'react';

export const StreamKey = (props: { streamKey: string }) => {
  const { streamKey } = props;
  return (
    <div className="settings-stream-key-container">
      <span>{streamKey}</span>
    </div>
  );
};
