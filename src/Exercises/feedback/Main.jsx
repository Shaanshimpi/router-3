import FeedbackList from './FeedbackList'

function FeedbackExercise() {
  return (
    <div className="app-shell">
      <h1>Feedback Collection Exercise</h1>
      <p className="page-tagline">
        Display community testimonials by wiring up the API request.
      </p>

      {/* TODO: add routing when you want to drill into a single entry */}
      <FeedbackList />
    </div>
  )
}

export default FeedbackExercise


