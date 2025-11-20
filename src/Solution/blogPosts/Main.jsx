import { Route, Routes } from 'react-router-dom'
import BlogPostsList from './BlogPostsList'
import BlogPostDetails from './BlogPostDetails'

function BlogPosts() {
  return (
    <div className="app-shell">
      <Routes>
        <Route index element={<BlogPostsList />} />
        <Route path=":id" element={<BlogPostDetails />} />
        <Route path="*" element={<p>Blog post not found.</p>} />
      </Routes>
    </div>
  )
}

export default BlogPosts



