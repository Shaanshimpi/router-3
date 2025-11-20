import { useEffect, useState } from 'react'
import BookCard from './components/BookCard'

const API_URL = 'https://codehub-api-collections.vercel.app/api/books'

function BooksList() {
  const [books, setBooks] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchBooks() {
      try {
        const response = await fetch(API_URL)
        if (!response.ok) {
          throw new Error('Failed to load books')
        }
        const data = await response.json()
        setBooks(data.docs || [])
      } catch (err) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchBooks()
  }, [])

  return (
    <main className="collection-page books-page">
      <header className="collection-header">
        <p className="eyebrow">Publishing · CodeHub Library</p>
        <h1>Books Collection</h1>
        <p className="page-tagline">
          Library catalog demonstrating pagination and filtering from the
          CodeHub APIs.
        </p>
      </header>

      {isLoading && <p>Loading books...</p>}
      {error && <p className="error-text">{error}</p>}

      <section className="collection-grid books-grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </section>
    </main>
  )
}

export default BooksList



