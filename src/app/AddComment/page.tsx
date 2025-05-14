import { useSearchParams } from 'next/navigation'
import { useState } from 'react'
import AddCommentForm from '@/components/AddCommentForm'
import GeneratePost from '@/components/GeneratePost'


export default async function AddCommentPage({
  searchParams,
}: {
  searchParams: { postId: string }
}) {
  const postID = searchParams.postId


  return (
    <>
      <GeneratePost searchpostId={Number(postID)}/>
      <AddCommentForm postId={Number(postID)}/>
    </>
  )
}