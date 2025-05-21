import React, { useState } from 'react';
import { mockMessages, mockUsers } from '../data/mockData';
import MessageBubble from '../components/MessageBubble';
import { Send } from 'lucide-react';

const Messaging: React.FC = () => {
  const [newMessage, setNewMessage] = useState('');
  
  // For demo purposes, we'll use the first two users from our mock data
  const currentUser = mockUsers[0]; // Creator
  const otherUser = mockUsers[1];   // Investor
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    
    // In a real app, this would send the message to the backend
    console.log('Sending message:', newMessage);
    setNewMessage('');
  };
  
  return (
    <div className="py-12 bg-gray-50 min-h-[calc(100vh-64px)]">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Chat Header */}
            <div className="bg-secondary-900 p-4 text-white">
              <div className="flex items-center">
                <img
                  src={otherUser.profilePicture}
                  alt={otherUser.name}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <h2 className="font-semibold">{otherUser.name}</h2>
                  <p className="text-sm text-gray-300">
                    {otherUser.role === 'investor' ? 'Investor' : 'Idea Creator'}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Messages Container */}
            <div className="h-[500px] p-4 overflow-y-auto space-y-4">
              {mockMessages.map((message) => (
                <MessageBubble
                  key={message.id}
                  message={message}
                  currentUser={currentUser}
                  otherUser={otherUser}
                />
              ))}
            </div>
            
            {/* Message Input */}
            <div className="border-t p-4">
              <form onSubmit={handleSubmit} className="flex space-x-4">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-grow input-field"
                />
                <button
                  type="submit"
                  className="btn-primary px-6 flex items-center"
                  disabled={!newMessage.trim()}
                >
                  <Send size={20} className="mr-2" />
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messaging;