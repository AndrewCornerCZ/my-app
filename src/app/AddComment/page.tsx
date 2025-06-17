import AddCommentForm from '@/components/AddCommentForm'
import GeneratePost from '@/components/GeneratePost'
import { notFound } from 'next/navigation'
import { PageProps } from '../../../.next/types/app/AddComment/page'

interface SearchParams {
  postId: string
}

export default async function AddCommentPage( {searchParams} : PageProps ) {
  const params = await searchParams as SearchParams
  if (!params.postId) {
    notFound()
  }
  const postId = (params?.postId) as string


  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto p-4 space-y-6">
        <h1 className="text-2xl font-bold text-white mb-6">Add Comment</h1>
        <div className="bg-zinc-800 rounded-lg p-4">
          <GeneratePost searchpostId={Number(postId)} />
        </div>
        <div className="bg-zinc-800 rounded-lg p-4">
          <AddCommentForm postId={Number(postId)} />
        </div>
      </div>
    </div>
  )
}