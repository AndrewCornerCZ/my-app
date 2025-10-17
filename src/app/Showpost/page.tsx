
import React from "react";
import GeneratePost from "@/components/postsComponents/GeneratePost";
import ShowComments from "@/components/postsComponents/ShowComments";
import BackButton from "@/components/postsComponents/BackButton";

export default async function Showpost({
  searchParams,
}: {
  searchParams: Promise<{ postId: number }>;
}) {
  const { postId } = await searchParams;

  if (!postId) {
    return <div className="text-white">Post not found</div>;
  }

  console.log("postID", postId);

  return (
    <>
      <GeneratePost searchpostId={postId} />
      <ShowComments postId={postId} />
      <BackButton />
    </>
  );
}
