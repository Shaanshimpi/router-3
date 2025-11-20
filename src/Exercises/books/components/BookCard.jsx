import { Link } from 'react-router-dom'

function BookCard({ book }) {
  return (
    <Link to={`/books/${book.id}`} className="book-card">
      <div className="book-card__status">
        <span className={`pill pill-${book.available ? 'success' : 'danger'}`}>
          {book.available ? 'Available' : 'Checked out'}
        </span>
        <span className="book-card__year">{book.publishedYear}</span>
      </div>

      <h2 className="book-card__title">{book.title}</h2>
      <p className="book-card__author">by {book.author}</p>

      <div className="book-card__meta">
        <span className="book-card__category">{book.category}</span>
      </div>

      <p className="book-card__cta">Open summary →</p>
    </Link>
  )
}

export default BookCard


