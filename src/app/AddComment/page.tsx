import AddCommentForm from '@/components/postsComponents/AddCommentForm'
import GeneratePost from '@/components/postsComponents/GeneratePost'
import Navbar from '@/components/Navbar'
import { notFound } from 'next/navigation'

interface AddCommentPageProps {
  searchParams: Promise<{ postId?: string }>
}

export default async function AddCommentPage({ searchParams }: AddCommentPageProps) {
  const resolvedSearchParams = await searchParams

  if (!resolvedSearchParams.postId) notFound()

  const postId = Number(resolvedSearchParams.postId)
  if (isNaN(postId)) notFound()

  return (
    <div className="min-h-screen bg-gray-950 text-white relative overflow-hidden">
      {/* Background blobs */}
      <div className="pointer-events-none fixed -top-32 -left-32 w-96 h-96 rounded-full bg-teal-700 opacity-20 blur-3xl" />
      <div className="pointer-events-none fixed -bottom-24 -right-24 w-80 h-80 rounded-full bg-teal-900 opacity-20 blur-3xl" />

      <Navbar />

      <div className="relative z-10 flex flex-col items-center px-4 pt-28 pb-16">
        <div className="w-full max-w-2xl">

          {/* Header */}
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-500 mb-1">Reply</p>
            <h1 className="text-2xl font-extrabold tracking-tight">
              Add{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-teal-500">
                Comment
              </span>
            </h1>
          </div>

          {/* Original post */}
          <div className="mb-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-3">Original post</p>
            <GeneratePost searchpostId={postId} />
          </div>

          {/* Connector line */}
          <div className="flex items-center gap-3 mb-4 px-2">
            <div className="w-px h-6 bg-gradient-to-b from-white/10 to-transparent ml-5" />
          </div>

          {/* Comment form */}
          <div className="bg-white/5 border border-white/10 rounded-3xl px-5 pt-4 pb-5 shadow-xl backdrop-blur-md">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-1">Your reply</p>
            <AddCommentForm postId={postId} />
          </div>

        </div>
      </div>
    </div>
  )
}