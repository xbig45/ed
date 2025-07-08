export const APP_NAME = 'C++ Hub';

export const ROUTES = {
  HOME: '/',
  DASHBOARD: '/dashboard',
  COURSES: '/courses',
  COURSE: '/course',
  PROFILE: '/profile',
} as const;

export const COURSE_LEVELS = {
  BEGINNER: 'beginner',
  INTERMEDIATE: 'intermediate',
  ADVANCED: 'advanced',
} as const;

export const PLAN_TYPES = {
  FREE: 'free',
  PREMIUM: 'premium',
} as const;

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    USER: '/auth/user',
  },
  COURSES: {
    LIST: '/courses',
    DETAIL: '/courses/:id',
    ENROLL: '/courses/:id/enroll',
    USER_COURSES: '/user/courses',
    PROGRESS: '/user/courses/:id/progress',
  },
  DASHBOARD: '/dashboard',
} as const;