"use client";

import { useUserProfile } from "@/hooks/use-auth";
import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NeedAuthLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  const { data: user, isFetching } = useUserProfile();
  const { push } = useRouter();

  useEffect(() => {
    if (!user && !isFetching) {
      push("/sign-in");
    }
  }, [push, user, isFetching]);

  return children;
}
