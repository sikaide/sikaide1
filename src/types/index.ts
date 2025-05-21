export interface Idea {
  id: string;
  title: string;
  description: string;
  location: string;
  category: Category;
  type: 'sell' | 'funding';
  imageUrl?: string;
  hasNDA: boolean;
  createdAt: Date;
  createdBy: string;
}

export type Category = 
  | 'Health' 
  | 'Agriculture' 
  | 'Finance' 
  | 'Construction' 
  | 'Tech' 
  | 'Retail' 
  | 'AI' 
  | 'Food' 
  | 'Social Enterprise';

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: Date;
  read: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'creator' | 'investor' | 'admin';
  profilePicture?: string;
}