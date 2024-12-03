"use client";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Image from "next/image";
import { usePost } from "@/hooks/use-post";
import { formatDistanceToNow } from "date-fns";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import AddCommentDialog from "./dialogs/AddCommentDialog";
import { useUserProfile } from "@/hooks/use-auth";
import DeleteDialog from "./dialogs/DeleteDialog";
import EditCommentDialog from "./dialogs/EditCommentDialog";

interface PostDetailProps {
  pid: string;
}

export default function PostDetail({ pid }: Readonly<PostDetailProps>) {
  const { data: user } = useUserProfile();
  const { data: post, isFetching, error } = usePost(pid);
  const { back } = useRouter();

  const goBack = useCallback(() => {
    back();
  }, [back]);

  if (isFetching) {
    return (
      <div className="flex h-[calc(100vh-140px)] items-center justify-center">
        <p className="text-lg text-gray-500">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-[calc(100vh-140px)] items-center justify-center">
        <p className="text-lg text-gray-500">Error: {error.message}</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex h-[calc(100vh-140px)] items-center justify-center">
        <p className="text-lg text-gray-500">No post found</p>
      </div>
    );
  }

  const { author, title, content, topics, comments, updatedAt } = post;

  const imgSrc = `https://i.pravatar.cc/150?u=${author.id}`;

  return (
    <div className="flex w-screen flex-col gap-6 md:w-full">
      <div className="space-y-4 px-6">
        <Image
          src="/images/arrow-left.svg"
          alt="Back"
          width={44}
          height={44}
          className="mb-10 cursor-pointer"
          onClick={goBack}
        />
        <div className="flex items-center gap-2 font-inter">
          <Avatar>
            <AvatarImage asChild src={imgSrc}>
              <Image
                src={imgSrc}
                alt={author.username}
                width={40}
                height={40}
              />
            </AvatarImage>
            <AvatarFallback>
              {author.username.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium">{author.username}</span>
          <span className="text-xs text-grey-2">
            {formatDistanceToNow(updatedAt, { addSuffix: true })}
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {topics.map((topic) => (
            <span
              key={topic.id}
              className="rounded-full bg-gray-200 px-3 py-1 text-xs font-medium text-gray-700"
            >
              {topic.name}
            </span>
          ))}
        </div>

        <h1 className="text-[1.75rem] font-semibold">{title}</h1>

        <p className="whitespace-pre-line text-xs text-gray-600">{content}</p>

        <div className="flex items-center gap-2 py-2 text-sm text-grey-2">
          <Image
            src="/images/comment.svg"
            alt="Comments"
            width={16}
            height={16}
            className="h-4 w-4"
          />
          <span>
            {post.comments.length} Comment
            {post.comments.length > 1 && "s"}
          </span>
        </div>
        <AddCommentDialog post={post} />
      </div>

      <div className="space-y-4 px-6">
        {comments.map((comment) => {
          const commentImgSrc = `https://i.pravatar.cc/150?u=${comment.author.id}`;
          const isOwner = comment.author.id === user?.id;
          return (
            <div key={comment.id} className="flex flex-col gap-2 font-inter">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage asChild src={commentImgSrc}>
                    <Image
                      src={commentImgSrc}
                      alt={comment.author.username}
                      width={40}
                      height={40}
                    />
                  </AvatarImage>
                  <AvatarFallback>
                    {comment.author.username.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <p className="text-sm font-medium">{comment.author.username}</p>
                <span className="text-xs text-grey-2">
                  {formatDistanceToNow(comment.updatedAt, {
                    addSuffix: true,
                  })}
                </span>
                {isOwner && (
                  <>
                    <EditCommentDialog post={post} comment={comment} />
                    <DeleteDialog comment={comment} />
                  </>
                )}
              </div>
              <p className="ml-[40px] whitespace-pre-line pl-4 text-xs text-gray-600">
                {comment.content}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
