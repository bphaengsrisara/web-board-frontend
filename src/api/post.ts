import {
  ApiErrorResponse,
  TopicData,
  PostData,
  PostSearchFormData,
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
