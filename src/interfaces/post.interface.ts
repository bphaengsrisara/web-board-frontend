import { User } from "./auth.interface";

export interface PostData {
  id: string;
  title: string;
  content: string;
  author: User;
  comments: CommentData[];
  topics: TopicData[];
  createdAt: string;
  updatedAt: string;
}

export interface PostFormData {
  title: string;
  content: string;
  topicIds: string[];
}

export interface PostSearchFormData {
  search: string;
  topicId: string;
}

export interface CommentData {
  id: string;
  content: string;
  author: User;
  createdAt: string;
  updatedAt: string;
}

export interface TopicData {
  id: string;
  name: string;
}
