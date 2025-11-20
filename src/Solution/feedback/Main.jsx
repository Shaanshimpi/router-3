import { Route, Routes } from 'react-router-dom'
import FeedbackList from './FeedbackList'
import FeedbackDetails from './FeedbackDetails'

function Feedback() {
  return (
    <div className="app-shell">
      <Routes>
        <Route index element={<FeedbackList />} />
        <Route path=":id" element={<FeedbackDetails />} />
        <Route path="*" element={<p>Feedback entry not found.</p>} />
      </Routes>
    </div>
  )
}

export default Feedback



