import PostDetail from "@/components/PostDetail";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { fetchPost } from "@/api/post";

export default async function PostId({
  params,
}: Readonly<{
  params: Promise<{ pid: string }>;
}>) {
  const { pid } = await params;
  const queryClient = new QueryClient();

  // prefetch on server once
  await queryClient.prefetchQuery({
    queryKey: ["post", pid],
    queryFn: () => fetchPost(pid),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PostDetail pid={pid} />
    </HydrationBoundary>
  );
}
