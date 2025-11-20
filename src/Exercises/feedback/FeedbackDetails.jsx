import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const API_URL = 'https://codehub-api-collections.vercel.app/api/feedback'

function FeedbackDetails() {
  const [entry, setEntry] = useState(null)

  useEffect(() => {
    // TODO: use useParams to read the id,
    // fetch `${API_URL}/${id}`, and store the JSON in setEntry.
  }, [])

  return (
    <main className="collection-page feedback-details-page">
      <Link to="/feedback" className="back-link">
        ← Back to feedback
      </Link>

      {entry ? (
        <article className="feedback-details-card">
          <p className="eyebrow">Feedback #{entry.id}</p>
          <h1>{entry.authorName}</h1>
          <div className="feedback-card__rating large">
            {'★'.repeat(entry.rating)}
            {'☆'.repeat(5 - entry.rating)}
          </div>
          <p className="feedback-details-card__comment">“{entry.comment}”</p>

          <section className="feedback-details-grid">
            <div>
              <p className="label">Resolved</p>
              <p className="value">{entry.resolved ? 'Yes' : 'No'}</p>
            </div>
            <div>
              <p className="label">Created</p>
              <p className="value">{entry.createdAt}</p>
            </div>
            <div>
              <p className="label">Updated</p>
              <p className="value">{entry.updatedAt}</p>
            </div>
          </section>
        </article>
      ) : (
        <p>TODO: load a feedback entry and show it here.</p>
      )}
    </main>
  )
}

export default FeedbackDetails


