import { Idea, Message, User } from '../types';

// Mock Users
export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Kofi Annan',
    email: 'kofi@example.com',
    role: 'creator',
    profilePicture: 'https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '2',
    name: 'Abena Mensah',
    email: 'abena@example.com',
    role: 'investor',
    profilePicture: 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '3',
    name: 'Kwame Nkrumah',
    email: 'admin@sikaide.com',
    role: 'admin',
    profilePicture: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

// Mock Ideas
export const mockIdeas: Idea[] = [
  {
    id: '1',
    title: 'Solar-Powered Water Purification Systems',
    description: 'Affordable solar-powered water purification systems for rural communities in Ghana. This technology uses locally sourced materials and simple maintenance procedures.',
    location: 'Accra',
    category: 'Health',
    type: 'funding',
    imageUrl: 'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    hasNDA: true,
    createdAt: new Date('2023-06-15'),
    createdBy: '1'
  },
  {
    id: '2',
    title: 'Mobile Farm Management App',
    description: 'A mobile application for small-scale farmers to track crop growth, manage resources, and access market prices. Features offline functionality for rural areas.',
    location: 'Kumasi',
    category: 'Agriculture',
    type: 'sell',
    imageUrl: 'https://images.pexels.com/photos/5502228/pexels-photo-5502228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    hasNDA: false,
    createdAt: new Date('2023-07-22'),
    createdBy: '1'
  },
  {
    id: '3',
    title: 'Peer-to-Peer Lending Platform',
    description: 'A secure mobile platform for community savings groups (susu) to manage contributions and loans digitally while maintaining traditional social structures.',
    location: 'Tamale',
    category: 'Finance',
    type: 'funding',
    imageUrl: 'https://images.pexels.com/photos/7821487/pexels-photo-7821487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    hasNDA: true,
    createdAt: new Date('2023-08-05'),
    createdBy: '1'
  },
  {
    id: '4',
    title: 'AI-Powered Diagnostic Tool',
    description: 'A machine learning system that uses smartphone photos to identify crop diseases and recommend treatments, designed specifically for crops common in West Africa.',
    location: 'Cape Coast',
    category: 'AI',
    type: 'sell',
    imageUrl: 'https://images.pexels.com/photos/8297534/pexels-photo-8297534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    hasNDA: false,
    createdAt: new Date('2023-09-10'),
    createdBy: '1'
  },
  {
    id: '5',
    title: 'Eco-Friendly Construction Materials',
    description: 'Manufacturing process for low-cost, earthquake-resistant building materials made from recycled plastic waste collected from coastal communities.',
    location: 'Takoradi',
    category: 'Construction',
    type: 'funding',
    imageUrl: 'https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    hasNDA: true,
    createdAt: new Date('2023-10-18'),
    createdBy: '1'
  }
];

// Mock Messages
export const mockMessages: Message[] = [
  {
    id: '1',
    senderId: '2',
    receiverId: '1',
    content: 'Hello! I\'m interested in your Solar-Powered Water Purification System idea. Could you provide more details about the manufacturing costs?',
    timestamp: new Date('2023-11-05T09:30:00'),
    read: true
  },
  {
    id: '2',
    senderId: '1',
    receiverId: '2',
    content: 'Thank you for your interest! The manufacturing cost per unit is approximately $120, and we estimate that with proper scaling, it could be reduced to $85 per unit.',
    timestamp: new Date('2023-11-05T10:45:00'),
    read: true
  },
  {
    id: '3',
    senderId: '2',
    receiverId: '1',
    content: 'That sounds promising. What kind of investment are you looking for, and what would be the expected return timeline?',
    timestamp: new Date('2023-11-05T14:20:00'),
    read: true
  },
  {
    id: '4',
    senderId: '1',
    receiverId: '2',
    content: 'We are seeking $75,000 in initial funding to set up a small production facility and distribute 500 units as a pilot. Our projections show a return on investment within 18 months based on our current orders.',
    timestamp: new Date('2023-11-06T08:15:00'),
    read: false
  }
];