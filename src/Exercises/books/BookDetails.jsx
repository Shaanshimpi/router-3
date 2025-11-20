import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const API_URL = 'https://codehub-api-collections.vercel.app/api/books'

function BookDetails() {
  const [book, setBook] = useState(null)

  useEffect(() => {
    // TODO: pull the id via useParams, fetch `${API_URL}/${id}`,
    // and call setBook(data) once you parse the JSON.
  }, [])

  return (
    <main className="collection-page books-details-page">
      <Link to="/books" className="back-link">
        ← Back to books
      </Link>

      {book ? (
        <article className="book-details-card">
          <header>
            <p className="eyebrow">Inventory #{book.id}</p>
            <h1>{book.title}</h1>
            <p className="book-details-card__author">by {book.author}</p>
            <span
              className={`pill pill-${book.available ? 'success' : 'danger'}`}
            >
              {book.available ? 'Available' : 'Checked out'}
            </span>
          </header>

          <section className="book-details-grid">
            <div>
              <p className="label">Category</p>
              <p className="value">{book.category}</p>
            </div>
            <div>
              <p className="label">Published</p>
              <p className="value">{book.publishedYear}</p>
            </div>
            <div>
              <p className="label">Added</p>
              <p className="value">{book.createdAt}</p>
            </div>
            <div>
              <p className="label">Updated</p>
              <p className="value">{book.updatedAt}</p>
            </div>
          </section>

          <p className="note">
            This info comes from the CodeHub Cars Collection API.
          </p>
        </article>
      ) : (
        <p>TODO: load a book and render its info.</p>
      )}
    </main>
  )
}

export default BookDetails


