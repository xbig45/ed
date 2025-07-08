import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Clock, Users, Star, Play, BookOpen } from 'lucide-react';
import Header from '../components/Header';
import LoadingSpinner from '../components/LoadingSpinner';
import { courseService } from '../services/courses';
import { Course } from '../types/course';
import { useAuth } from '../hooks/useAuth';

const CoursePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { user, openAuthModal } = useAuth();
  const [course, setCourse] = useState<Course | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isEnrolling, setIsEnrolling] = useState(false);

  useEffect(() => {
    if (id) {
      loadCourse(parseInt(id));
    }
  }, [id]);

  const loadCourse = async (courseId: number) => {
    try {
      const courseData = await courseService.getCourse(courseId);
      setCourse(courseData);
    } catch (error) {
      console.error('Failed to load course:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEnroll = async () => {
    if (!user) {
      openAuthModal('register');
      return;
    }

    if (!course) return;

    setIsEnrolling(true);
    try {
      await courseService.enrollInCourse(course.id);
      // Handle successful enrollment
    } catch (error) {
      console.error('Enrollment failed:', error);
    } finally {
      setIsEnrolling(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header />
        <div className="flex items-center justify-center min-h-screen">
          <LoadingSpinner size="lg" />
        </div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-white text-center">
            <h1 className="text-2xl font-bold mb-4">Course Not Found</h1>
            <p className="text-gray-300">The course you're looking for doesn't exist.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      
      <div className="pt-20 container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/10">
              <img
                src={course.image_url}
                alt={course.title}
                className="w-full h-48 lg:h-64 object-cover rounded-xl mb-6"
              />
              
              <h1 className="text-2xl lg:text-4xl font-bold text-white mb-4">
                {course.title}
              </h1>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {course.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center space-x-2 text-gray-300">
                  <Clock className="h-5 w-5" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Users className="h-5 w-5" />
                  <span>{course.students_count} students</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span>{course.rating}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <BookOpen className="h-5 w-5" />
                  <span className="capitalize">{course.level}</span>
                </div>
              </div>

              <div className="text-gray-300">
                <p><strong>Instructor:</strong> {course.instructor}</p>
                <p><strong>Category:</strong> {course.category}</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 sticky top-24">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-white mb-2">
                  {course.price === 0 ? 'Free' : `$${course.price}`}
                </div>
                {course.price > 0 && (
                  <p className="text-gray-300">One-time payment</p>
                )}
              </div>

              <button
                onClick={handleEnroll}
                disabled={isEnrolling}
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all duration-200 disabled:opacity-50 flex items-center justify-center space-x-2"
              >
                {isEnrolling ? (
                  <LoadingSpinner size="sm" />
                ) : (
                  <>
                    <Play className="h-5 w-5" />
                    <span>Enroll Now</span>
                  </>
                )}
              </button>

              <div className="mt-6 space-y-3 text-sm text-gray-300">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Lifetime access</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Certificate of completion</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>24/7 support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;