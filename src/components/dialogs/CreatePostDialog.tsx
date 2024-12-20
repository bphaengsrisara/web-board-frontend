"use client";

import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog";
import Hidden from "../ui/hidden";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useForm } from "react-hook-form";
import { PostFormData } from "@/interfaces";
import { FormField } from "../ui/form";
import { Button } from "../ui/button";
import { useCallback } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useTopics, useCreatePost } from "@/hooks/use-post";

export default function CreatePostDialog() {
  const { back } = useRouter();
  const { control, handleSubmit } = useForm<PostFormData>({
    defaultValues: {
      title: "",
      content: "",
      topicIds: [],
    },
  });
  const { data: topics } = useTopics();
  const { mutate, status, error, reset } = useCreatePost();

  const handleClose = useCallback(() => {
    back();
  }, [back]);

  const onSubmit = (data: PostFormData) => {
    mutate(data, {
      onSuccess: () => {
        handleClose();
      },
    });
  };

  return (
    <Dialog defaultOpen onOpenChange={handleClose}>
      <DialogContent className="w-[80%] rounded-lg font-ibm-plex-sans md:w-[50%] md:rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-left font-inter text-[1.5rem] md:text-[1.75rem]">
            Create Post
          </DialogTitle>
          <Hidden>
            <DialogDescription>Create a new post</DialogDescription>
          </Hidden>
        </DialogHeader>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-2 md:gap-4"
        >
          <FormField
            name="topicIds"
            control={control}
            render={({ field }) => (
              <Select onValueChange={(value) => field.onChange([value])}>
                <SelectTrigger className="justify-center gap-1 border-primary px-5 font-bold text-primary focus:ring-primary md:w-fit">
                  <SelectValue placeholder="Choose a community" />
                </SelectTrigger>
                <SelectContent>
                  {topics?.map((topic) => (
                    <SelectItem
                      key={topic.id}
                      value={topic.id}
                      className="focus:bg-primary/50"
                    >
                      {topic.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          <FormField
            name="title"
            control={control}
            render={({ field }) => (
              <Input {...field} onKeyDown={reset} placeholder="Title" />
            )}
          />
          <FormField
            name="content"
            control={control}
            render={({ field }) => (
              <Textarea
                {...field}
                onKeyDown={reset}
                placeholder="What’s on your mind..."
                rows={5}
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
          <div className="flex flex-col justify-end gap-2 md:flex-row md:gap-4">
            <Button
              variant={"outline"}
              className="border-primary text-primary hover:text-green-2 md:w-[105px]"
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="md:w-[105px]"
              disabled={status === "pending"}
            >
              Post
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
