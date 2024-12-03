"use client";

import { CommentData, DialogMode, PostData } from "@/interfaces";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Image from "next/image";
import { useDeleteComment, useDeletePost } from "@/hooks/use-post";
import { Button } from "../ui/button";

interface DeleteDialogProps {
  post?: PostData;
  comment?: CommentData;
}

export default function DeleteDialog({
  post,
  comment,
}: Readonly<DeleteDialogProps>) {
  const { mutate: deletePost } = useDeletePost();
  const { mutate: deleteComment } = useDeleteComment();

  const mode = post ? DialogMode.POST : DialogMode.COMMENT;

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Image
          src="/images/delete.svg"
          alt="delete"
          width={12}
          height={13}
          className="cursor-pointer"
        />
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-[90%] gap-8 rounded-lg font-inter md:w-[520px] md:rounded-xl">
        <AlertDialogHeader className="text-center md:text-center">
          <AlertDialogTitle className="text-xl font-semibold md:px-24 md:text-lg">
            Please confirm if you wish to delete the {mode}
          </AlertDialogTitle>
          <AlertDialogDescription className="md:px-18 text-sm md:text-base">
            Are you sure you want to delete the {mode}? Once deleted, it cannot
            be recovered.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="flex flex-col justify-center gap-4 md:flex-row-reverse md:px-4">
          <Button
            variant="destructive"
            className="w-full font-ibm-plex-sans"
            onClick={() => {
              if (post) {
                deletePost(post.id);
              } else if (comment) {
                deleteComment(comment.id);
              }
            }}
          >
            Delete
          </Button>
          <AlertDialogCancel className="m-0 w-full font-ibm-plex-sans">
            Cancel
          </AlertDialogCancel>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
