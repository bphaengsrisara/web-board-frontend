"use client";

import { useBoundStore } from "@/store/useBoundStore";

export default function SignIn() {
  const { user, setUser } = useBoundStore();

  const handleSignIn = () => {
    setUser({
      id: "1",
      username: "user1",
    });
  };

  return (
    <div>
      <button onClick={handleSignIn}>SignIn</button>
      <div>{user?.username}</div>
    </div>
  );
}
