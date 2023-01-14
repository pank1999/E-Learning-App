export interface Video {
  name: string;
  url: string;
  state?: 'watched' | 'unwatched';
}
export interface Assignment {
  name: string;
  task: string;
  status?: 'completed' | 'not-completed';
}
export interface CourseSection {
  title: string;
  Videos: Video[];
  assignment: Assignment[];
}
