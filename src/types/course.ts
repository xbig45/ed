export interface Course {
  id: number;
  title: string;
  description: string;
  image_url: string;
  duration: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  price: number;
  instructor: string;
  category: string;
  rating: number;
  students_count: number;
  created_at: string;
  updated_at: string;
}

export interface Enrollment {
  id: number;
  user_id: number;
  course_id: number;
  enrolled_at: string;
  completed_at?: string;
  progress_percentage: number;
}

export interface UserProgress {
  id: number;
  user_id: number;
  course_id: number;
  lesson_id: number;
  completed_at?: string;
  time_spent: number;
}