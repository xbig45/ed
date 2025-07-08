import { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import { authService } from '../services/auth';
import { User, LoginData, RegisterData } from '../types/auth';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (data: LoginData) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => void;
  openAuthModal: (mode: 'login' | 'register') => void;
  isAuthModalOpen: boolean;
  authModalMode: 'login' | 'register';
  closeAuthModal: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState<'login' | 'register'>('login');

  // Check for existing session on mount
  useEffect(() => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      // Verify token with backend
      authService.getCurrentUser()
        .then(setUser)
        .catch(() => {
          localStorage.removeItem('auth_token');
        });
    }
  }, []);

  const login = async (data: LoginData) => {
    setIsLoading(true);
    try {
      const response = await authService.login(data);
      setUser(response.user);
      localStorage.setItem('auth_token', response.token);
      setIsAuthModalOpen(false);
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (data: RegisterData) => {
    setIsLoading(true);
    try {
      const response = await authService.register(data);
      setUser(response.user);
      localStorage.setItem('auth_token', response.token);
      setIsAuthModalOpen(false);
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    authService.logout();
    setUser(null);
    localStorage.removeItem('auth_token');
  };

  const openAuthModal = (mode: 'login' | 'register') => {
    setAuthModalMode(mode);
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  return (
    <AuthContext.Provider value={{
      user,
      isLoading,
      login,
      register,
      logout,
      openAuthModal,
      isAuthModalOpen,
      authModalMode,
      closeAuthModal
    }}>
      {children}
    </AuthContext.Provider>
  );
};