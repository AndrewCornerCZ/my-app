
import React from "react";
import GeneratePost from "@/components/postsComponents/GeneratePost";
import ShowComments from "@/components/postsComponents/ShowComments";
import BackButton from "@/components/postsComponents/BackButton";

export default async function Showpost({searchParams}: { searchParams: { postId: number }}) {
  if (!searchParams) {
    return <div className="text-white">Post not found</div>;
  }
  const postID = searchParams.postId
  console.log("postID", postID)
  return (
    <>
      <GeneratePost searchpostId={Number(postID)}/>
      <ShowComments postId={Number(postID)}/>
      <BackButton />
    </>
  )
}