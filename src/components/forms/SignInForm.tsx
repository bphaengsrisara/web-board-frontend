"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { UserFormData } from "@/interfaces";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "@/api/auth";
import { useRouter } from "next/navigation";

export default function SignInForm() {
  const { register, handleSubmit } = useForm<UserFormData>();
  const { push } = useRouter();

  const { mutate, isPending, error, reset } = useMutation({
    mutationFn: signIn,
    onSuccess: () => {
      push("/");
    },
  });

  const onSubmit: SubmitHandler<UserFormData> = (data) => {
    mutate(data);
  };

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
