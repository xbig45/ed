import React from 'react';
import { ArrowRight, PlayCircle, Users, BookOpen, Award, Code, Sparkles } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

const Hero: React.FC = () => {
  const { openAuthModal } = useAuth();

  const stats = [
    { icon: Users, value: '50K+', label: 'Students' },
    { icon: BookOpen, value: '1000+', label: 'Courses' },
    { icon: Award, value: '98%', label: 'Success Rate' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${8 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          >
            {i % 3 === 0 ? (
              <Code className="w-6 h-6 text-blue-400" />
            ) : i % 3 === 1 ? (
              <div className="w-4 h-4 bg-cyan-400 rounded-full" />
            ) : (
              <Sparkles className="w-5 h-5 text-purple-400" />
            )}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 lg:mb-8 border border-white/20">
            <Code className="h-4 w-4 lg:h-5 lg:w-5 text-blue-400" />
            <span className="text-white font-medium text-sm lg:text-base">Next-Gen C++ Learning</span>
            <Sparkles className="h-4 w-4 lg:h-5 lg:w-5 text-yellow-400" />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-tight mb-6 lg:mb-8">
            Master
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
              C++ Programming
            </span>
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Like Never Before
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-8 lg:mb-12 px-4">
            Experience the future of programming education with our 
            <span className="text-cyan-400 font-semibold"> AI-powered interactive platform.</span>
            <br className="hidden sm:block" />
            From beginner to expert, unlock your coding potential.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center mb-12 lg:mb-16 px-4">
            <button 
              onClick={() => openAuthModal('register')}
              className="w-full sm:w-auto bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 text-white text-lg lg:text-xl px-8 lg:px-12 py-4 lg:py-6 rounded-xl lg:rounded-2xl font-bold shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-3"
            >
              <Code className="h-5 w-5 lg:h-6 lg:w-6" />
              <span>Start Learning Now</span>
              <ArrowRight className="h-5 w-5 lg:h-6 lg:w-6" />
            </button>
            
            <button className="w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white text-lg lg:text-xl px-8 lg:px-12 py-4 lg:py-6 rounded-xl lg:rounded-2xl font-bold hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/30 flex items-center justify-center space-x-3">
              <PlayCircle className="h-5 w-5 lg:h-6 lg:w-6" />
              <span>Watch Demo</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 lg:gap-8 max-w-3xl mx-auto px-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white/5 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
                <div className="flex justify-center mb-2 lg:mb-4">
                  <div className="p-2 lg:p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg lg:rounded-xl">
                    <stat.icon className="h-4 w-4 lg:h-6 lg:w-6 text-white" />
                  </div>
                </div>
                <div className="text-xl lg:text-3xl font-bold text-white mb-1 lg:mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-300 font-medium text-sm lg:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-8 mt-12 lg:mt-16 px-4">
            <div className="flex items-center space-x-2 bg-white/5 rounded-full px-4 py-2 text-sm lg:text-base">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-gray-300">AI-Powered Learning</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/5 rounded-full px-4 py-2 text-sm lg:text-base">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-gray-300">Industry Certified</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/5 rounded-full px-4 py-2 text-sm lg:text-base">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <span className="text-gray-300">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;