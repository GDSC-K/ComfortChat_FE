import React, { useState, useEffect } from 'react';
import backIcon from '../../assets/icons/icon-back.png';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../css/TextChat.css';
import axios from 'axios';

const TextChat = () => {
  const [messages, setMessages] = useState([]);
  const [currentTypingId, setCurrentTypingId] = useState(null);

  const handleSendMessage = (message, answer) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: message, isUser: true },
      {
        text: `"${answer}"`,
        isUser: false,
        isTyping: true,
        id: Date.now(),
      },
    ]);
  };

  const handleEndTyping = (id) => {
    setMessages((prevMessages) =>
      prevMessages.map((msg) =>
        msg.id === id ? { ...msg, isTyping: false } : msg,
      ),
    );
    setCurrentTypingId(null);
  };

  useEffect(() => {
    if (currentTypingId === null) {
      const nextTypingMessage = messages.find(
        (msg) => !msg.isUser && msg.isTyping,
      );
      if (nextTypingMessage) {
        setCurrentTypingId(nextTypingMessage.id);

        // Simulating typing with a timeout
        setTimeout(() => {
          handleEndTyping(nextTypingMessage.id);
        }, 2000); // Adjust the timeout duration as needed
      }
    }
  }, [messages, currentTypingId]);

  return (
    <div className="App">
      <div className="chat-box">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div className="back-button">
            <img src={backIcon} />
          </div>
        </Link>
        <MessageList
          messages={messages}
          currentTypingId={currentTypingId}
          onEndTyping={handleEndTyping}
        />
        <MessageForm onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

const MessageList = ({ messages, currentTypingId, onEndTyping }) => (
  <div className="messages-list">
    {messages.map((message, index) => (
      <Message
        key={index}
        {...message}
        onEndTyping={onEndTyping}
        currentTypingId={currentTypingId}
      />
    ))}
  </div>
);

const Message = ({
  text,
  isUser,
  isTyping,
  id,
  onEndTyping,
  currentTypingId,
}) => {
  return (
    <div className={isUser ? 'user-message' : 'ai-message'}>
      {isTyping && currentTypingId === id ? (
        // Simulating typing with a message
        <p>
          <b>AI</b>: {text}
        </p>
      ) : (
        <p>
          <b>{isUser ? 'User' : 'AI'}</b>: {text}
        </p>
      )}
    </div>
  );
};

const MessageForm = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        'http://ec2-15-164-233-79.ap-northeast-2.compute.amazonaws.com/chats/text',
        {
          question: message,
        },
        {
          headers: {
            Authorization: '',
          },
        },
      );

      console.log(response.data.answer);
      setAnswer(response.data.answer);
      onSendMessage(message, response.data.answer);
    } catch (error) {
      console.log(error);
    }

    setMessage('');
    setAnswer('');
  };

  return (
    <form onSubmit={handleSubmit} className="message-form">
      <input
        type="text"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        className="message-input"
      />
      <button type="submit" className="send-button">
        보내기
      </button>
    </form>
  );
};

export default TextChat;
