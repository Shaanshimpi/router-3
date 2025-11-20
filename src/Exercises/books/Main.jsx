import BooksList from './BooksList'

function BooksExercise() {
  return (
    <div className="app-shell">
      <h1>Books Collection Exercise</h1>
      <p className="page-tagline">
        Practice rendering the library catalog by finishing the data-loading
        steps in the files below.
      </p>

      {/* TODO: add routing later if you want a separate details view */}
      <BooksList />
    </div>
  )
}

export default BooksExercise


