export interface ICourse {
  id: number;
  name: string;
  category: string;
  description: string;
  author: string;
  fees: string;
  facultyId: number;
  isPublished: boolean;
  progress: number;
  image: ICourseImage[];
  videos: IVideo[];
}

export interface ICourseImage {
  id: number;
  Image: string;
  courseId: number;
}

export interface IVideo {
  id: number;
  courseId: number;
  title: string;
  videoUrl: string;
}
