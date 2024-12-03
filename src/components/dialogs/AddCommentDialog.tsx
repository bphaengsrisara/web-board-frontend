"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "../ui/dialog";
import Hidden from "../ui/hidden";
import { Textarea } from "../ui/textarea";
import { useForm } from "react-hook-form";
import { FormField } from "../ui/form";
import { Button } from "../ui/button";
import { CommentFormData, PostData } from "@/interfaces";
import { useCreateComment } from "@/hooks/use-post";
import { useState } from "react";

export default function AddCommentDialog({
  post,
}: Readonly<{ post: PostData }>) {
  const [isOpen, setIsOpen] = useState(false);
  const { control, handleSubmit } = useForm<CommentFormData>({
    defaultValues: {
      postId: post.id,
      content: "",
    },
  });

  const { mutate, status, error, reset } = useCreateComment();

  const onSubmit = (data: CommentFormData) => {
    mutate(data, {
      onSuccess: () => {
        setIsOpen(false);
      },
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="gap-2 border-primary font-ibm-plex-sans text-primary"
        >
          Add Comments
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[80%] rounded-lg font-ibm-plex-sans md:w-[50%] md:rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-left font-inter text-[1.5rem] md:text-[1.75rem]">
            Add Comment
          </DialogTitle>
          <Hidden>
            <DialogDescription>Add a comment to this post</DialogDescription>
          </Hidden>
        </DialogHeader>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-2 md:gap-4"
        >
          <FormField
            name="content"
            control={control}
            render={({ field }) => (
              <Textarea
                {...field}
                onKeyDown={reset}
                placeholder="Write your comment..."
                className="min-h-[100px]"
              />
            )}
          />
          {error && error instanceof Error && error.message && (
            <>
              {error.message.split(",").map((message) => (
                <p key={message.split(" ")[0]} className="text-sm text-red-500">
                  {message}
                </p>
              ))}
            </>
          )}
          <Button
            type="submit"
            className="ml-auto"
            disabled={status === "pending"}
          >
            {status === "pending" ? "Adding..." : "Add Comment"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
