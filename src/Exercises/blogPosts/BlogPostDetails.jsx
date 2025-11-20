import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const API_URL = 'https://codehub-api-collections.vercel.app/api/blog-posts'

function BlogPostDetails() {
  const [post, setPost] = useState(null)

  useEffect(() => {
    // TODO: read the id with useParams, fetch `${API_URL}/${id}`,
    // parse JSON, and update state.
  }, [])

  return (
    <main className="collection-page blog-details-page">
      <Link to="/blog-posts" className="back-link">
        ← Back to blog posts
      </Link>

      {post ? (
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
              <p className="value">{post.createdAt}</p>
            </div>
            <div>
              <p className="label">Updated</p>
              <p className="value">{post.updatedAt}</p>
            </div>
          </section>
        </article>
      ) : (
        <p>TODO: load a blog post and render it here.</p>
      )}
    </main>
  )
}

export default BlogPostDetails


