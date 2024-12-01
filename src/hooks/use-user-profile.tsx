"use client";

import { fetchUserProfile } from "@/api/auth";
import { useQuery } from "@tanstack/react-query";

export function useUserProfile() {
  return useQuery({
    queryKey: ["userProfile"],
    queryFn: fetchUserProfile,
  });
}
