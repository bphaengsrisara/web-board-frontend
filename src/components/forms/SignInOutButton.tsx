"use client";

import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Image from "next/image";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { useSignOut, useUserProfile } from "@/hooks/use-auth";

export default function SignInOutButton() {
  const { push } = useRouter();
  const { data: user } = useUserProfile();
  const { mutate: signOut } = useSignOut();

  const signIn = () => {
    push("/sign-in");
  };

  if (user) {
    const { id, username } = user;
    const imgSrc = `https://i.pravatar.cc/150?u=${id}`;
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Avatar className="hidden h-8 w-8 cursor-pointer md:block">
            <AvatarImage asChild src={imgSrc}>
              <Image src={imgSrc} alt={username} width={40} height={40} />
            </AvatarImage>
            <AvatarFallback>{username.charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you sure you want to sign out?
            </AlertDialogTitle>
            <AlertDialogDescription>
              You will need to sign in again to access your account.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => signOut()}>
              Sign out
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  }

  return (
    <Button className="hidden font-ibm-plex-sans md:block" onClick={signIn}>
      Sign in
    </Button>
  );
}
