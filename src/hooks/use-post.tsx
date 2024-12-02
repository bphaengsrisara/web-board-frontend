"use client";

import { fetchTopics, fetchPosts, fetchMyPosts } from "@/api/post";
import { PostSearchFormData } from "@/interfaces";
import { useQuery } from "@tanstack/react-query";

export function useTopics() {
  return useQuery({
    queryKey: ["topics"],
    queryFn: fetchTopics,
  });
}

export function usePosts({ topicId, search }: PostSearchFormData) {
  return useQuery({
    queryKey: ["posts", { topicId, search }],
    queryFn: () => fetchPosts({ topicId, search }),
  });
}

export function useMyPosts({ topicId, search }: PostSearchFormData) {
  return useQuery({
    queryKey: ["my-posts", { topicId, search }],
    queryFn: () => fetchMyPosts({ topicId, search }),
  });
}
