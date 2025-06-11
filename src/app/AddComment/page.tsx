import { Metadata } from 'next'
import AddCommentForm from '@/components/AddCommentForm'
import GeneratePost from '@/components/GeneratePost'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Add Comment',
  description: 'Add a comment to a post'
}

export default async function AddCommentPage({
  searchParams,
}: {
  searchParams: { postId?: string }
}) {
  if (!searchParams?.postId) {
    notFound()
  }

  const postId = Number(searchParams.postId)
  if (isNaN(postId)) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto p-4 space-y-6">
        <h1 className="text-2xl font-bold text-white mb-6">Add Comment</h1>
        <div className="bg-zinc-800 rounded-lg p-4">
          <GeneratePost searchpostId={postId} />
        </div>
        <div className="bg-zinc-800 rounded-lg p-4">
          <AddCommentForm postId={postId} />
        </div>
      </div>
    </div>
  )
}