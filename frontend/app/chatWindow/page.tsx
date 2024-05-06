"use client"

import React, { useState, useEffect, useRef } from 'react';
import MessageBubble from '../components/MessageBubble';
import MessageInput from '../components/MessageInput';

interface ChatWindowProps {}

interface Message {
  text: string;
  from: "user" | "bot";
  timestamp: Date;
  typing?: boolean; 
}
const ChatWindow: React.FC<ChatWindowProps> = () => {
  const [messages, setMessages] = useState<{ text: string; from: 'user' | 'bot' }[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const storedMessages = localStorage.getItem('chatMessages');
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(messages));
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sendMessage = async (text: string) => {
    const newMessage: Message = { text, from: "user", timestamp: new Date() }; 
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  
    try {
      const response = await fetch("http://127.0.0.1:5000/handle_new_query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: text,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        simulateTyping(data.answer); 
      } else {
        throw new Error("Failed to fetch bot response");
      }
    } catch (error) {
      console.error("Error fetching bot response:", error);
    }
  };
  const simulateTyping = (responseText: string) => {
    const delayBeforeShowingMessage = 200;
    const typingMessage: Message = { text: '', from: "bot", timestamp: new Date(), typing: true };
    setMessages((prevMessages) => [...prevMessages, typingMessage]);
  
    const fullText = responseText;
    let currentCharIndex = 0;
  
    const typeChar = () => {
      if (currentCharIndex < fullText.length) {
        typingMessage.text += fullText.charAt(currentCharIndex);
        currentCharIndex++;
        setMessages((prevMessages) => {
          const updatedMessages = [...prevMessages];
          updatedMessages[updatedMessages.length - 1] = { ...typingMessage };
          return updatedMessages;
        });
        setTimeout(typeChar, 10);
      } else {
        setMessages((prevMessages) => {
          const updatedMessages = [...prevMessages];
          const completedMessage = { ...updatedMessages[updatedMessages.length - 1], typing: false };
          updatedMessages[updatedMessages.length - 1] = completedMessage;
          return updatedMessages;
        });
      }
    };
  
    typeChar();
  };

  return (
    <div className="flex flex-col h-full w-full px-5 pb-5 justify-between">
      <div className="flex-grow overflow-y-auto" style={{ maxHeight: 'calc(100vh - 100px)' }}>
        <div className="flex px-5 py-3 flex-col">
          {messages.map((message, index) => (
            <MessageBubble key={index} message={message} />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <MessageInput onSendMessage={sendMessage} />
    </div>
  );
};

export default ChatWindow;
