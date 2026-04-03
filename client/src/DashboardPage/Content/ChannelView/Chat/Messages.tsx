const messages = [
  {
    author: 'Alex Mark',
    content: 'Hello World',
    id: 1,
  },
  {
    author: 'Nicole Robert',
    content: 'Hello World',
    id: 2,
  },
  {
    author: 'Jason Rodriguez',
    content: 'Hello World',
    id: 3,
  },
  {
    author: 'Douglas Chris',
    content: 'Hello World',
    id: 4,
  },
];

const Message = ({ author, content }: { author: string; content: string }) => {
  return (
    <span className="chat-messages-message">
      <span style={{ fontWeight: 'bold' }}>{author}: </span>
      {content}
    </span>
  );
};

const Messages = () => {
  return (
    <div className="chat-messages-container">
      {messages.map((message) => (
        <Message
          key={message.id}
          author={message.author}
          content={message.content}
        />
      ))}
    </div>
  );
};

export default Messages;
