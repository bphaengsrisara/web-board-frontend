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
import { CommentData, CommentFormData, PostData } from "@/interfaces";
import { FormField } from "../ui/form";
import { Button } from "../ui/button";
import { useEditComment } from "@/hooks/use-post";
import Image from "next/image";
import { useState } from "react";

interface EditCommentDialogProps {
  post: PostData;
  comment: CommentData;
}

export default function EditCommentDialog({
  post,
  comment,
}: Readonly<EditCommentDialogProps>) {
  const [isOpen, setIsOpen] = useState(false);
  const { control, handleSubmit } = useForm<CommentFormData>({
    defaultValues: {
      postId: post.id,
      content: comment.content,
    },
  });
  const { mutate, status, error, reset } = useEditComment();

  const onSubmit = (data: CommentFormData) => {
    mutate(
      { commentId: comment.id, data },
      {
        onSuccess: () => {
          setIsOpen(false);
        },
      },
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Image
          src="/images/edit.svg"
          alt="Edit"
          width={12}
          height={11}
          className="ml-auto cursor-pointer"
        />
      </DialogTrigger>
      <DialogContent className="w-[80%] rounded-lg font-ibm-plex-sans md:w-[50%] md:rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-left font-inter text-[1.5rem] md:text-[1.75rem]">
            Edit Post
          </DialogTitle>
          <Hidden>
            <DialogDescription>Edit a new post</DialogDescription>
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
