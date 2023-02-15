export interface AddedCourseDetails {
  id: number;
  name: string;
  description: string;
  category: string;
  author: string;
  fees: string;
}

export interface CourseDetails {
  id: number;
  name: string;
  image?: any;
  description: string;
  category: string;
  author: string;
  fees: string;
  isPublished: boolean;
  progress: number;
  facultyId: number;
}
