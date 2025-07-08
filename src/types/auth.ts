export interface User {
  id: number;
  name: string;
  email: string;
  plan: 'free' | 'premium';
  avatar?: string;
  created_at: string;
  updated_at: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  plan?: 'free' | 'premium';
}

export interface AuthResponse {
  user: User;
  token: string;
  message: string;
}