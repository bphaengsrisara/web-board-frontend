import { User } from "./auth.interface";

export interface PostData {
  id: string;
  title: string;
  content: string;
  author: User;
  comments: CommentData[];
  topics: TopicData[];
}

export interface PostFormData {
  title: string;
  content: string;
  topics: string[];
}

export interface PostSearchFormData {
  search: string;
  topicId: string;
}

export interface CommentData {
  id: string;
  content: string;
  user: User;
}

export interface TopicData {
  id: string;
  name: string;
}
