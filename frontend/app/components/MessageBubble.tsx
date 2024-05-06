import React, { useState } from 'react';
import Image from 'next/image';
import { SpeakerWaveIcon } from '@heroicons/react/24/solid';

interface MessageBubbleProps {
  message: {
    text: string;
    from: 'user' | 'bot';
  };
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isUserMessage = message.from === 'user';
  const alignClass = isUserMessage ? 'items-end justify-end' : 'items-start justify-start';
  const avatarSrc = isUserMessage ? '/user.png' : '/bot.png';
  const avatarPosition = isUserMessage ? 'ml-2' : 'mr-2';

  const [speaking, setSpeaking] = useState(false);

  const speakText = () => {
    const utterance = new SpeechSynthesisUtterance(message.text);
    utterance.lang = 'en-US';
    speechSynthesis.speak(utterance);
    setSpeaking(true);

    utterance.onend = () => {
      setSpeaking(false);
    };
  };

  return (
    <div className={`flex ${alignClass} mb-4 mt-2 mx-5`}>
      {!isUserMessage && <Image src={avatarSrc} alt="Avatar" width={32} height={32} className={`rounded-full ${avatarPosition}`} />}
      <div className={`relative rounded-lg p-5 text-justify ${isUserMessage ? 'bg-purple-600 text-white' : 'bg-gray-800 text-white'}`}>
        {message.text}
        <button className="absolute top-full right-0 transform translate-y-1/2" onClick={speakText} disabled={speaking}>
          <SpeakerWaveIcon className="h-3 w-3" />
        </button>
      </div>
      {isUserMessage && <Image src={avatarSrc} alt="Avatar" width={32} height={32} className={`rounded-full ${avatarPosition}`} />}
    </div>
  );
};

export default MessageBubble;
