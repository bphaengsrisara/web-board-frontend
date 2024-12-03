"use client";

import {
  fetchTopics,
  fetchPosts,
  fetchMyPosts,
  createPost,
  deletePost,
  editPost,
} from "@/api/post";
import { PostSearchFormData } from "@/interfaces";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

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

export function useCreatePost(onSuccess?: () => void) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      queryClient.invalidateQueries({ queryKey: ["my-posts"] });
      onSuccess?.();
    },
  });
}

export const useEditPost = (onSuccess?: () => void) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: editPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      queryClient.invalidateQueries({ queryKey: ["my-posts"] });
      onSuccess?.();
    },
  });
};

export function useDeletePost(onSuccess?: () => void) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      queryClient.invalidateQueries({ queryKey: ["my-posts"] });
      onSuccess?.();
    },
  });
}
