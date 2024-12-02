import { ApiErrorResponse, TopicData, PostData } from "@/interfaces";
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

export const fetchPosts = async ({
  topicId,
  search,
}: {
  topicId?: string;
  search?: string;
}): Promise<PostData[]> => {
  const params = new URLSearchParams();
  if (topicId) params.append("topicId", topicId);
  if (search) params.append("search", search);

  const url = params.toString()
    ? `${API_URL}/posts?${params.toString()}`
    : `${API_URL}/posts`;

  const response = await fetch(url, {
    method: "GET",
    credentials: "include",
  });

  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(
      (responseData as ApiErrorResponse).message || "Failed to fetch posts",
    );
  }

  return responseData;
};
