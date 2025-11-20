import { useEffect, useState } from 'react'
import BlogPostCard from './components/BlogPostCard'

const API_URL = 'https://codehub-api-collections.vercel.app/api/blog-posts'

function BlogPostsList() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    // TODO: fetch posts from API_URL, parse JSON, and call setPosts(data.docs || []).
    // Once that works, think about filtering by published boolean.
  }, [])

  return (
    <main className="collection-page blog-page">
      <header className="collection-header">
        <p className="eyebrow">Storytelling · Content</p>
        <h1>Blog Posts Collection</h1>
        <p className="page-tagline">
          Populate this list with live blog posts from the API.
        </p>
      </header>

      <section className="collection-grid blog-grid">
        {posts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </section>
    </main>
  )
}

export default BlogPostsList


