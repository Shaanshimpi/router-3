import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function FeedbackDetails() {
  const { id } = useParams()
  const [entry, setEntry] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchEntry() {
      try {
        const response = await fetch(
          `https://codehub-api-collections.vercel.app/api/feedback/${id}`,
        )
        if (!response.ok) {
          throw new Error('Unable to load feedback entry')
        }
        const data = await response.json()
        setEntry(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchEntry()
  }, [id])

  return (
    <main className="collection-page feedback-details-page">
      <Link to="/feedback" className="back-link">
        ← Back to feedback
      </Link>

      {isLoading && <p>Loading feedback...</p>}
      {error && <p className="error-text">{error}</p>}

      {entry && (
        <article className="feedback-details-card">
          <header>
            <p className="eyebrow">Feedback #{entry.id}</p>
            <h1>{entry.authorName}</h1>
            <div className="feedback-card__rating large">
              {'★'.repeat(entry.rating)}
              {'☆'.repeat(5 - entry.rating)}
            </div>
          </header>

          <p className="feedback-details-card__comment">“{entry.comment}”</p>

          <section className="feedback-details-grid">
            <div>
              <p className="label">Resolved</p>
              <p className="value">{entry.resolved ? 'Yes' : 'No'}</p>
            </div>
            <div>
              <p className="label">Created</p>
              <p className="value">
                {new Date(entry.createdAt).toLocaleDateString()}
              </p>
            </div>
            <div>
              <p className="label">Updated</p>
              <p className="value">
                {new Date(entry.updatedAt).toLocaleDateString()}
              </p>
            </div>
          </section>
        </article>
      )}
    </main>
  )
}

export default FeedbackDetails



