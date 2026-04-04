import { Socket } from 'socket.io';

import Channel from '../../models/Channel.ts';
import Message from '../../models/Message.ts';
import { Server } from 'socket.io';

type ChatHistoryMessage = {
  author: string;
  content: string;
};

type ChatHistorySuccessPayload = {
  channelId: string;
  messages: ChatHistoryMessage[];
};

type ChatHistoryErrorPayload = {
  errorOccurred: true;
};

export const chatHistory = async (
  socket: Socket,
  channelId: string
): Promise<void> => {
  try {
    const channel = await Channel.findById(channelId).populate<{
      messages: Array<{ author?: string; content?: string }>;
    }>('messages');

    if (channel) {
      const payload: ChatHistorySuccessPayload = {
        channelId,
        messages: channel.messages.map((message) => ({
          author: message.author ?? '',
          content: message.content ?? '',
        })),
      };
      console.log(channelId);

      socket.emit('chat-history', payload);
      return;
    }

    const payload: ChatHistoryErrorPayload = { errorOccurred: true };
    socket.emit('chat-history', payload);
  } catch (error) {
    console.log(error);
    const payload: ChatHistoryErrorPayload = { errorOccurred: true };
    socket.emit('chat-history', payload);
  }
};

interface ChatMessagePayload {
  content: string;
  author: string;
}

interface ChatMessageData {
  toChannel: string;
  message: ChatMessagePayload;
}

export const chatMessage = async (
  io: Server,
  messageData: ChatMessageData
): Promise<void> => {
  try {
    const channel = await Channel.findById(messageData.toChannel);

    if (channel) {
      const newMessage = new Message({
        content: messageData.message.content,
        author: messageData.message.author,
        date: new Date(),
      });

      await newMessage.save();

      channel.messages.push(newMessage._id);

      await channel.save();
    }
  } catch (error) {
    console.log(error);
  }
};
