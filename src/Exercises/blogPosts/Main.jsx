import BlogPostsList from './BlogPostsList'

function BlogPostsExercise() {
  return (
    <div className="app-shell">
      <h1>Blog Posts Collection Exercise</h1>
      <p className="page-tagline">
        Fetch editorial content from the CodeHub API and display it in this grid.
      </p>

      {/* TODO: add routing to show BlogPostDetails when needed */}
      <BlogPostsList />
    </div>
  )
}

export default BlogPostsExercise


