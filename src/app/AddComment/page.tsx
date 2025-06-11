import { Metadata } from 'next'
import AddCommentForm from '@/components/AddCommentForm'
import GeneratePost from '@/components/GeneratePost'
import { notFound } from 'next/navigation'
import { JSX } from 'react'

// Remove Promise from props interface and use type instead of interface
type PageProps = {
  searchParams: {
    postId?: string;
  }
}

export const metadata: Metadata = {
  title: 'Add Comment',
  description: 'Add a comment to a post'
}

export default async function AddCommentPage({
  searchParams,
}: PageProps): Promise<JSX.Element> {
  if (!searchParams?.postId) {
    notFound()
  }

  const postId = Number(searchParams.postId)
  if (isNaN(postId)) {
    notFound()
  }

  return (
    <div className="container mx-auto p-4">
      <GeneratePost searchpostId={postId} />
      <AddCommentForm postId={postId} />
    </div>
  )
}