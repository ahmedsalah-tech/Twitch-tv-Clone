import { useState } from 'react'; 

type NewMessageInputProps = {
  sendMessage: (message: string) => void;
};

export const NewMessageInput = ({ sendMessage }: NewMessageInputProps) => {
  const [messageContent, setMessageContent] = useState('');

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessageContent(e.target.value);
  };

  const handleSendMessage = () => {
    // send message to the server

    // after sending message, reset the value
    setMessageContent('');
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  console.log(messageContent);

  return (
    <div className="chat-message-input-container">
      <input
        className="chat-message-input"
        placeholder="Type message..."
        value={messageContent}
        onChange={handleValueChange}
        onKeyDown={handleKeyPress}
      />
    </div>
  );
};
