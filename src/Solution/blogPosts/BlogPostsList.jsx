import { useEffect, useState } from 'react'
import BlogPostCard from './components/BlogPostCard'

const API_URL = 'https://codehub-api-collections.vercel.app/api/blog-posts'

function BlogPostsList() {
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(API_URL)
        if (!response.ok) {
          throw new Error('Failed to load blog posts')
        }
        const data = await response.json()
        setPosts(data.docs || [])
      } catch (err) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPosts()
  }, [])

  return (
    <main className="collection-page blog-page">
      <header className="collection-header">
        <p className="eyebrow">Storytelling · Content</p>
        <h1>Blog Posts Collection</h1>
        <p className="page-tagline">
          Editorial content demonstrating slug uniqueness and text search.
        </p>
      </header>

      {isLoading && <p>Loading blog posts...</p>}
      {error && <p className="error-text">{error}</p>}

      <section className="collection-grid blog-grid">
        {posts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </section>
    </main>
  )
}

export default BlogPostsList



