import { Link } from 'react-router-dom'

function FeedbackCard({ entry }) {
  return (
    <Link to={`/feedback/${entry.id}`} className="feedback-card">
      <header>
        <h2>{entry.authorName}</h2>
        <div className="feedback-card__rating">
          {'★'.repeat(entry.rating)}
          {'☆'.repeat(5 - entry.rating)}
        </div>
      </header>
      <p className="feedback-card__comment">“{entry.comment}”</p>
      <footer>
        <span className={`pill ${entry.resolved ? 'pill-success' : 'pill-muted'}`}>
          {entry.resolved ? 'Resolved' : 'Open'}
        </span>
        <span>Read more →</span>
      </footer>
    </Link>
  )
}

export default FeedbackCard


