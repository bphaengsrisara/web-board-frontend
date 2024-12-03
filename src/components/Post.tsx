import { PostData } from "@/interfaces";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";
import DeletePostDialog from "./dialogs/DeletePostDialog";
import EditPostDialog from "./dialogs/EditPostDialog";

export default function Post({
  post,
  last,
  editable = false,
}: Readonly<{
  post: PostData;
  last: boolean;
  editable?: boolean;
}>) {
  const imgSrc = `https://i.pravatar.cc/150?u=${post.author.id}`;

  return (
    <>
      <div className="space-y-2 px-6">
        <div className="flex items-center gap-4 pb-1">
          <Avatar>
            <AvatarImage asChild src={imgSrc}>
              <Image
                src={imgSrc}
                alt={post.author.username}
                width={40}
                height={40}
              />
            </AvatarImage>
            <AvatarFallback>
              {post.author.username.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium text-grey-2">
            {post.author.username}
          </span>
          {editable && (
            <>
              <EditPostDialog post={post} />
              <DeletePostDialog post={post} />
            </>
          )}
        </div>

        <div>
          <div className="flex flex-wrap gap-2">
            {post.topics.map((topic) => (
              <span
                key={topic.id}
                className="rounded-full bg-gray-200 px-3 py-1 text-xs font-medium text-gray-700"
              >
                {topic.name}
              </span>
            ))}
          </div>
        </div>

        <h2 className="text-base font-semibold">{post.title}</h2>

        <p className="whitespace-pre-line text-sm text-gray-600">
          {post.content}
        </p>

        <div className="flex items-center gap-2 text-sm text-grey-2">
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
      </div>
      {!last && <Separator />}
    </>
  );
}
