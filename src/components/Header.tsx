import React, { useState, useEffect } from 'react';
import { Menu, X, Code, User, LogOut, Crown } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import AuthModal from './AuthModal';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, logout, openAuthModal } = useAuth();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'Courses', href: '#courses' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer">
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <Code className="h-4 w-4 lg:h-6 lg:w-6 text-white" />
            </div>
            <span className="text-lg lg:text-xl font-bold text-white">C++ Hub</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium text-sm lg:text-base"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            {user ? (
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2 bg-white/10 rounded-lg px-3 py-2">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <User className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-white text-sm font-medium">{user.name}</span>
                  {user.plan === 'premium' && <Crown className="h-4 w-4 text-yellow-400" />}
                </div>
                <button
                  onClick={logout}
                  className="text-gray-300 hover:text-white transition-colors p-2"
                >
                  <LogOut className="h-5 w-5" />
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => openAuthModal('login')}
                  className="text-white font-medium px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-200"
                >
                  Sign In
                </button>
                <button
                  onClick={() => openAuthModal('register')}
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200"
                >
                  Get Started
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white transition-colors p-2"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10 bg-black/90 backdrop-blur-lg">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors font-medium px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              
              {user ? (
                <div className="px-4 py-2 border-t border-white/10 mt-3">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <User className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-medium">{user.name}</div>
                      {user.plan === 'premium' && (
                        <div className="flex items-center space-x-1">
                          <Crown className="h-3 w-3 text-yellow-400" />
                          <span className="text-yellow-400 text-xs">Premium</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={logout}
                    className="text-red-400 hover:text-red-300 transition-colors font-medium"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <div className="px-4 py-2 border-t border-white/10 mt-3 space-y-2">
                  <button
                    onClick={() => {
                      openAuthModal('login');
                      setIsMenuOpen(false);
                    }}
                    className="w-full text-left text-white font-medium py-2"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => {
                      openAuthModal('register');
                      setIsMenuOpen(false);
                    }}
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-2 rounded-lg font-medium"
                  >
                    Get Started
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      
      <AuthModal />
    </header>
  );
};

export default Header;