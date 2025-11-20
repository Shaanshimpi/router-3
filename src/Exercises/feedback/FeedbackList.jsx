import { useEffect, useState } from 'react'
import FeedbackCard from './components/FeedbackCard'

const API_URL = 'https://codehub-api-collections.vercel.app/api/feedback'

function FeedbackList() {
  const [entries, setEntries] = useState([])

  useEffect(() => {
    // TODO: fetch feedback entries from API_URL and store data.docs in state.
    // Think about how you'll show loading or error states once the basics work.
  }, [])

  return (
    <main className="collection-page feedback-page">
      <header className="collection-header">
        <p className="eyebrow">Community · Testimonials</p>
        <h1>Feedback Collection</h1>
        <p className="page-tagline">
          After you implement the fetch, these cards will show real comments.
        </p>
      </header>

      <section className="feedback-grid">
        {entries.map((entry) => (
          <FeedbackCard key={entry.id} entry={entry} />
        ))}
      </section>
    </main>
  )
}

export default FeedbackList


