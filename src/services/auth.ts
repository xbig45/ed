import { apiService } from './api';
import { User, LoginData, RegisterData, AuthResponse } from '../types/auth';

class AuthService {
  async login(data: LoginData): Promise<AuthResponse> {
    return apiService.post<AuthResponse>('/auth/login', data);
  }

  async register(data: RegisterData): Promise<AuthResponse> {
    return apiService.post<AuthResponse>('/auth/register', data);
  }

  async logout(): Promise<void> {
    try {
      await apiService.post('/auth/logout');
    } catch (error) {
      console.error('Logout error:', error);
    }
  }

  async getCurrentUser(): Promise<User> {
    return apiService.get<User>('/auth/user');
  }

  async updateProfile(data: Partial<User>): Promise<User> {
    return apiService.put<User>('/auth/user', data);
  }
}

export const authService = new AuthService();