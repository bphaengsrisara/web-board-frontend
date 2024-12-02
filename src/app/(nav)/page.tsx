"use client";

import { useForm, FormProvider } from "react-hook-form";
import SearchBar from "@/components/forms/SearchBar";
import { PostSearchFormData } from "@/interfaces";
import Post from "@/components/Post";
import { Card, CardContent } from "@/components/ui/card";
import { usePosts } from "@/hooks/use-post";

export default function Home() {
  const methods = useForm<PostSearchFormData>({
    defaultValues: {
      search: "",
      topicId: "",
    },
  });

  const { watch } = methods;
  const search = watch("search");
  const topicId = watch("topicId");

  const { data: posts = [], isLoading } = usePosts({ search, topicId });

  const renderPosts = () => {
    if (isLoading) {
      return (
        <div className="w-full text-center text-lg font-medium text-grey-2">
          Loading...
        </div>
      );
    }

    if (posts.length === 0) {
      return (
        <div className="w-full text-center text-lg font-medium text-grey-2">
          No posts found
        </div>
      );
    }

    return (
      <Card className="w-full">
        <CardContent className="px-0 pt-6">
          <div className="space-y-6">
            {posts.map((post, index) => (
              <Post
                key={post.id}
                post={post}
                last={index === posts.length - 1}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <FormProvider {...methods}>
      <div className="flex min-h-screen flex-col items-start justify-start gap-8">
        <SearchBar />

        <div className="flex w-full flex-col items-start gap-8">
          {renderPosts()}
        </div>
      </div>
    </FormProvider>
  );
}
