"use client";

import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useUserProfile } from "@/hooks/use-user-profile";

export default function SignInButton() {
  const { push } = useRouter();
  const { data: user } = useUserProfile();

  const signIn = () => {
    push("/sign-in");
  };

  if (user) {
    const { id, username } = user;
    return (
      <Avatar className="hidden h-8 w-8 cursor-pointer md:block">
        <AvatarImage src={`https://i.pravatar.cc/150?u=${id}`} />
        <AvatarFallback>{username}</AvatarFallback>
      </Avatar>
    );
  }

  return (
    <Button className="hidden font-ibm-plex-sans md:block" onClick={signIn}>
      Sign in
    </Button>
  );
}
