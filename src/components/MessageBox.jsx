import { Message } from "./Message";

function MessageBox({ messages }) {
  return (
    <div className="messageBox">
      <h1>Messages</h1>
      {messages?.map((message) => (
        <Message
          key={message.id}
          user={message.user}
          message={message.message}
        />
      ))}
    </div>
  );
}

export { MessageBox };
