import React, { useState, useRef } from 'react';
import { MicrophoneIcon, StopIcon } from '@heroicons/react/24/solid';

const MessageInput: React.FC<{ onSendMessage: (text: string) => void }> = ({ onSendMessage }) => {
  const [inputText, setInputText] = useState('');
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const spokenTextRef = useRef<string>('');

  const handleVoiceInput = () => {
    if (!listening) {
      // Start listening
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event: SpeechRecognitionEvent) => {
        const transcript = event.results[event.results.length - 1][0].transcript;
        spokenTextRef.current += transcript + ' ';
        setInputText(spokenTextRef.current);
      };

      recognitionRef.current.onend = () => {
        setListening(false);
      };

      recognitionRef.current.start();
      setListening(true);
    } else {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputText.trim() !== '') {
      onSendMessage(inputText);
      setInputText('');
      spokenTextRef.current = '';
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full rounded-md border flex border-purple-600">
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Type a message..."
        className="w-full rounded-md p-2 border border-purple-600 focus:outline-none focus:border-purple-300 text-white bg-gray-800"
      />
      <button
        type="button"
        onClick={handleVoiceInput}
        className="flex items-center justify-center w-12 bg-purple-600 hover:bg-purple-700 rounded-md text-white"
      >
        {listening ? <StopIcon className="h-6 w-6" /> : <MicrophoneIcon className="h-6 w-6" />}
      </button>
    </form>
  );
};

export default MessageInput;
