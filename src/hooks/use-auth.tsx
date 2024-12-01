"use client";

import { fetchUserProfile, logout, signIn } from "@/api/auth";
import { UserFormData } from "@/interfaces";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useSignIn(onSuccess?: () => void) {
  return useMutation<string, Error, UserFormData>({
    mutationFn: signIn,
    onSuccess,
  });
}

export function useUserProfile() {
  return useQuery({
    queryKey: ["userProfile"],
    queryFn: fetchUserProfile,
  });
}

export function useSignOut() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userProfile"] });
    },
  });
}
