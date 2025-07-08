import { apiService } from './api';
import { Course, Enrollment, UserProgress } from '../types/course';

class CourseService {
  async getAllCourses(): Promise<Course[]> {
    return apiService.get<Course[]>('/courses');
  }

  async getCourse(id: number): Promise<Course> {
    return apiService.get<Course>(`/courses/${id}`);
  }

  async enrollInCourse(courseId: number): Promise<Enrollment> {
    return apiService.post<Enrollment>(`/courses/${courseId}/enroll`);
  }

  async getUserCourses(): Promise<Course[]> {
    return apiService.get<Course[]>('/user/courses');
  }

  async updateProgress(courseId: number, progress: number): Promise<UserProgress> {
    return apiService.put<UserProgress>(`/user/courses/${courseId}/progress`, {
      progress
    });
  }

  async getDashboardData(): Promise<any> {
    return apiService.get('/dashboard');
  }
}

export const courseService = new CourseService();