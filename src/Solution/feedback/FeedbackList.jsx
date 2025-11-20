import { useEffect, useState } from 'react'
import FeedbackCard from './components/FeedbackCard'

const API_URL = 'https://codehub-api-collections.vercel.app/api/feedback'

function FeedbackList() {
  const [entries, setEntries] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchFeedback() {
      try {
        const response = await fetch(API_URL)
        if (!response.ok) {
          throw new Error('Failed to load feedback')
        }
        const data = await response.json()
        setEntries(data.docs || [])
      } catch (err) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchFeedback()
  }, [])

  return (
    <main className="collection-page feedback-page">
      <header className="collection-header">
        <p className="eyebrow">Community · Testimonials</p>
        <h1>Feedback Collection</h1>
        <p className="page-tagline">
          Ratings and comments highlighting CodeHub wins.
        </p>
      </header>

      {isLoading && <p>Loading feedback...</p>}
      {error && <p className="error-text">{error}</p>}

      <section className="feedback-grid">
        {entries.map((entry) => (
          <FeedbackCard key={entry.id} entry={entry} />
        ))}
      </section>
    </main>
  )
}

export default FeedbackList



