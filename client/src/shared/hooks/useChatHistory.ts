import { useEffect, useState } from 'react';

import { getChatHistory, getSocket } from '../../socketConn';

type Message = {
  author: string;
  content: string;
};

type ChatHistoryPayload = {
  errorOccurred?: boolean;
  messages: Message[];
};

export const useChatHistory = (channelId: string) => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const socket = getSocket();
    getChatHistory(channelId);

    const handler = (data: ChatHistoryPayload) => {
      if (data.errorOccurred) {
        // TODO: handle error
        console.error('Error fetching chat history');
        return;
      }
      setMessages(data.messages);
    };

    socket.on('chat-history', handler);

    return () => {
      socket.off('chat-history', handler);
    };
  }, [channelId]);

  const sendMessage = (message: string) => {
    // to be implemented
    console.log(message);
  };

  return {
    messages,
    sendMessage,
  };
};
