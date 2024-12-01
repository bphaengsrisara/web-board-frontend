"use client";

import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useUserProfile } from "@/hooks/use-user-profile";
import Image from "next/image";

export default function SignInButton() {
  const { push } = useRouter();
  const { data: user } = useUserProfile();

  const signIn = () => {
    push("/sign-in");
  };

  if (user) {
    const { id, username } = user;
    const imgSrc = `https://i.pravatar.cc/150?u=${id}`;
    return (
      <Avatar className="hidden h-8 w-8 cursor-pointer md:block">
        <AvatarImage asChild src={imgSrc}>
          <Image src={imgSrc} alt={username} width={40} height={40} />
        </AvatarImage>
        <AvatarFallback>{username.charAt(0).toUpperCase()}</AvatarFallback>
      </Avatar>
    );
  }

  return (
    <Button className="hidden font-ibm-plex-sans md:block" onClick={signIn}>
      Sign in
    </Button>
  );
}
