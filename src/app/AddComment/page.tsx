import AddCommentForm from '@/components/AddCommentForm'
import GeneratePost from '@/components/GeneratePost'
import { notFound } from 'next/navigation'
import './addComment.css'

interface AddCommentPageProps {
  searchParams: Promise<{
    postId?: string
  }>
}

export default async function AddCommentPage({ searchParams }: AddCommentPageProps) {
  const resolvedSearchParams = await searchParams
  
  if (!resolvedSearchParams.postId) {
    notFound()
  }
  
  const postId = Number(resolvedSearchParams.postId)
  if (isNaN(postId)) {
    notFound()
  }

  return (
    <div className="comment-page">
      <div className="comment-container">
        <div className="comment-content">
          <h1 className="comment-title">Add Comment</h1>
          <div className="comment-box">
            <GeneratePost searchpostId={postId} />
          </div>
          <div className="comment-box">
            <AddCommentForm postId={postId} />
          </div>
        </div>
      </div>
    </div>
  )
}