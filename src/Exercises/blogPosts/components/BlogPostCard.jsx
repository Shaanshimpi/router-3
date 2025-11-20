import { Link } from 'react-router-dom'

function BlogPostCard({ post }) {
  return (
    <Link to={`/blog-posts/${post.id}`} className="blog-card">
      <p className="blog-card__slug">{post.slug}</p>
      <h2>{post.title}</h2>
      <p className="blog-card__summary">{post.summary}</p>
      <footer>
        <span className={`pill ${post.published ? 'pill-success' : 'pill-muted'}`}>
          {post.published ? 'Published' : 'Draft'}
        </span>
        <span>Read story →</span>
      </footer>
    </Link>
  )
}

export default BlogPostCard


