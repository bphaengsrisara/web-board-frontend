import {
  ApiErrorResponse,
  TopicData,
  PostData,
  PostSearchFormData,
  PostFormData,
} from "@/interfaces";
import { API_URL } from "@/config";

export const fetchTopics = async (): Promise<TopicData[]> => {
  const response = await fetch(`${API_URL}/topics`, {
    method: "GET",
    credentials: "include",
  });

  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(
      (responseData as ApiErrorResponse).message || "Failed to fetch topics",
    );
  }

  return responseData;
};

const fetchPostsBase = async (
  endpoint: string,
  params: PostSearchFormData,
  errorMessage: string,
): Promise<PostData[]> => {
  const searchParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value) searchParams.append(key, value);
  });

  const url = searchParams.toString()
    ? `${API_URL}${endpoint}?${searchParams.toString()}`
    : `${API_URL}${endpoint}`;

  const response = await fetch(url, {
    method: "GET",
    credentials: "include",
  });

  const responseData = await response.json();

  if (!response.ok) {
    throw new Error((responseData as ApiErrorResponse).message || errorMessage);
  }

  return responseData;
};

export const fetchPosts = async ({
  topicId,
  search,
}: PostSearchFormData): Promise<PostData[]> => {
  return fetchPostsBase("/posts", { topicId, search }, "Failed to fetch posts");
};

export const fetchMyPosts = async ({
  topicId,
  search,
}: PostSearchFormData): Promise<PostData[]> => {
  return fetchPostsBase(
    "/posts/my-posts",
    { topicId, search },
    "Failed to fetch my posts",
  );
};

export const createPost = async (data: PostFormData): Promise<PostData> => {
  const response = await fetch(`${API_URL}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  });

  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(
      (responseData as ApiErrorResponse).message || "Failed to create post",
    );
  }

  return responseData;
};

export const editPost = async ({
  postId,
  data,
}: {
  postId: string;
  data: PostFormData;
}): Promise<PostData> => {
  const response = await fetch(`${API_URL}/posts/${postId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  });

  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(
      (responseData as ApiErrorResponse).message || "Failed to edit post",
    );
  }

  return responseData;
};

export const deletePost = async (postId: string): Promise<void> => {
  const response = await fetch(`${API_URL}/posts/${postId}`, {
    method: "DELETE",
    credentials: "include",
  });

  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(
      (responseData as ApiErrorResponse).message || "Failed to delete post",
    );
  }
};
