"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { UserFormData } from "@/interfaces";
import { useRouter } from "next/navigation";
import { useSignIn, useUserProfile } from "@/hooks/use-auth";
import { useEffect } from "react";

export default function SignInForm() {
  const { register, handleSubmit } = useForm<UserFormData>();
  const { push } = useRouter();
  const { data: user, refetch } = useUserProfile();

  const { mutate, isPending, error, reset } = useSignIn(refetch);

  const onSubmit: SubmitHandler<UserFormData> = (data) => {
    mutate(data);
  };

  useEffect(() => {
    if (user) {
      push("/");
    }
  }, [push, user]);

  return (
    <div className="w-full md:w-[384px]">
      <h1 className="mb-8 text-4xl text-[1.75rem] font-bold">Sign in</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div>
          <Input
            id="username"
            type="text"
            placeholder="Username"
            onKeyDown={reset}
            {...register("username")}
            className="w-full rounded-md border border-gray-300 bg-white p-3 text-black placeholder:text-grey-1 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <Button
          type="submit"
          className="w-full rounded-md px-4 py-3 font-semibold text-white transition-all"
          disabled={isPending}
        >
          {isPending ? "Signing in..." : "Sign In"}
        </Button>
        {error && (
          <p className="mt-2 text-sm text-red-400">
            {error instanceof Error ? error.message : "An error occurred"}
          </p>
        )}
      </form>
    </div>
  );
}
