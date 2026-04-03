import Messages from './Messages';
import { NewMessageInput } from './newMessageInput';

type ChatProps = {
  channelId: string;
};

export const Chat = ({ channelId }: ChatProps) => {
  return (
    <div className="chat-section">
      <div className="chat-title-container">
        <span className="chat-title-text">Stream Chat</span>
      </div>
      <Messages messages={[]} />
      <NewMessageInput sendMessage={() => {}} />
    </div>
  );
};
