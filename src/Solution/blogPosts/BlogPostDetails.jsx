import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function BlogPostDetails() {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await fetch(
          `https://codehub-api-collections.vercel.app/api/blog-posts/${id}`,
        )
        if (!response.ok) {
          throw new Error('Unable to load blog post')
        }
        const data = await response.json()
        setPost(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPost()
  }, [id])

  return (
    <main className="collection-page blog-details-page">
      <Link to="/blog-posts" className="back-link">
        ← Back to blog posts
      </Link>

      {isLoading && <p>Loading blog post...</p>}
      {error && <p className="error-text">{error}</p>}

      {post && (
        <article className="blog-details-card">
          <p className="blog-card__slug">{post.slug}</p>
          <h1>{post.title}</h1>
          <span className={`pill ${post.published ? 'pill-success' : 'pill-muted'}`}>
            {post.published ? 'Published' : 'Draft'}
          </span>

          <p className="blog-details-card__summary">{post.summary}</p>
          <p className="blog-details-card__body">{post.body}</p>

          <section className="blog-details-grid">
            <div>
              <p className="label">Created</p>
              <p className="value">
                {new Date(post.createdAt).toLocaleDateString()}
              </p>
            </div>
            <div>
              <p className="label">Updated</p>
              <p className="value">
                {new Date(post.updatedAt).toLocaleDateString()}
              </p>
            </div>
          </section>
        </article>
      )}
    </main>
  )
}

export default BlogPostDetails



