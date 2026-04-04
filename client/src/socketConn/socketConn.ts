import { io, Socket } from 'socket.io-client';

let socket: Socket;

export const getSocket = () => socket;

export const connectWithSocketServer = () => {
  socket = io('http://localhost:5002');

  socket.on('connect', () => {
    console.log('successfully connected with socket.io server');
    console.log(socket.id);
  });

  socket.on('chat-history', (chatHistory) => {
    console.log(chatHistory)
    console.log('chat-history-came-from-the-server')
  })
};

export const getChatHistory = (channelId: string) => {
  socket.emit('chat-history', channelId);
};
