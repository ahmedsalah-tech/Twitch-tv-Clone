import { Server, Socket } from 'socket.io';
import http from 'http';

import { chatHistory, chatMessage } from './events/ChatHistory.ts';

let io: Server;

export const registerSocketServer = (server: http.Server) => {
  io = new Server(server, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST'],
    },
  });

  io.on('connection', (socket: Socket) => {
    console.log('new user connected');
    console.log(socket.id);

    socket.on('chat-history', (channelId: string) => {
      chatHistory(socket, channelId);
    });

    socket.on(
      'chat-message',
      (data: { toChannel: string; message: { author: string; content: string } }) => {
        chatMessage(io, { toChannel: data.toChannel, message: data.message });
      }
    );
  });
};
