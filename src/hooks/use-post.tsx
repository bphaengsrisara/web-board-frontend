"use client";

import { fetchTopics, fetchPosts } from "@/api/post";
import { useQuery } from "@tanstack/react-query";

export function useTopics() {
  return useQuery({
    queryKey: ["topics"],
    queryFn: fetchTopics,
  });
}

export function usePosts({
  topicId,
  search,
}: {
  topicId?: string;
  search?: string;
}) {
  return useQuery({
    queryKey: ["posts", { topicId, search }],
    queryFn: () => fetchPosts({ topicId, search }),
  });
}
