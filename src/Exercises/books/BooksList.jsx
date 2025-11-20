import { useEffect, useState } from 'react'
import BookCard from './components/BookCard'

const API_URL = 'https://codehub-api-collections.vercel.app/api/books'

function BooksList() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    // TODO: fetch books from API_URL, parse JSON, and call setBooks(data.docs || []).
    // Consider showing a quick loading indicator while you wait for the response.
  }, [])

  return (
    <main className="collection-page books-page">
      <header className="collection-header">
        <p className="eyebrow">Publishing · CodeHub Library</p>
        <h1>Books Collection</h1>
        <p className="page-tagline">
          Hook up the fetch logic so these cards show real data.
        </p>
      </header>

      <section className="collection-grid books-grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </section>
    </main>
  )
}

export default BooksList


