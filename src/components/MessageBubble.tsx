import React from 'react';
import { Message, User } from '../types';

interface MessageBubbleProps {
  message: Message;
  currentUser: User;
  otherUser: User;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message, currentUser, otherUser }) => {
  const isCurrentUser = message.senderId === currentUser.id;
  const user = isCurrentUser ? currentUser : otherUser;
  
  return (
    <div className={`flex mb-4 ${isCurrentUser ? 'justify-end' : 'justify-start'}`}>
      {!isCurrentUser && (
        <div className="flex-shrink-0 mr-3">
          <img
            src={user.profilePicture || 'https://via.placeholder.com/40'}
            alt={user.name}
            className="w-10 h-10 rounded-full"
          />
        </div>
      )}
      
      <div className={`max-w-xs lg:max-w-md ${isCurrentUser ? 'bg-primary-500 text-white' : 'bg-gray-100 text-gray-800'} rounded-lg px-4 py-2`}>
        <p className="text-sm">{message.content}</p>
        <div className={`text-xs mt-1 ${isCurrentUser ? 'text-primary-200' : 'text-gray-500'}`}>
          {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
      
      {isCurrentUser && (
        <div className="flex-shrink-0 ml-3">
          <img
            src={user.profilePicture || 'https://via.placeholder.com/40'}
            alt={user.name}
            className="w-10 h-10 rounded-full"
          />
        </div>
      )}
    </div>
  );
};

export default MessageBubble;