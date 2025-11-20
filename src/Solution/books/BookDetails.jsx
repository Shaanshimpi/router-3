import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function BookDetails() {
  const { id } = useParams()
  const [book, setBook] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchBook() {
      try {
        const response = await fetch(
          `https://codehub-api-collections.vercel.app/api/books/${id}`,
        )
        if (!response.ok) {
          throw new Error('Unable to load book info')
        }
        const data = await response.json()
        setBook(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchBook()
  }, [id])

  return (
    <main className="collection-page books-details-page">
      <Link to="/books" className="back-link">
        ← Back to books
      </Link>

      {isLoading && <p>Loading book data...</p>}
      {error && <p className="error-text">{error}</p>}

      {book && (
        <article className="book-details-card">
          <header>
            <p className="eyebrow">Inventory #{book.id}</p>
            <h1>{book.title}</h1>
            <p className="book-details-card__author">by {book.author}</p>
            <span
              className={`pill pill-${
                book.available ? 'success' : 'danger'
              }`}
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
              <p className="value">
                {new Date(book.createdAt).toLocaleDateString()}
              </p>
            </div>
            <div>
              <p className="label">Updated</p>
              <p className="value">
                {new Date(book.updatedAt).toLocaleDateString()}
              </p>
            </div>
          </section>

          <p className="note">
            Source:{' '}
            <a
              href="https://codehub-api-collections.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              CodeHub API Collections
            </a>
            .
          </p>
        </article>
      )}
    </main>
  )
}

export default BookDetails


