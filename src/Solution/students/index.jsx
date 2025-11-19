import { Navigate, Route, Routes } from 'react-router-dom'
import StudentsList from './StudentsList'
import StudentDetails from './StudentDetails'

function Students() {
  return (
    <div className="app-shell">
      <Routes>
        <Route path="/" element={<Navigate to="/students" replace />} />
        <Route path="/students" element={<StudentsList />} />
        <Route path="/student/:id" element={<StudentDetails />} />
        <Route path="*" element={<p>Page not found.</p>} />
      </Routes>
    </div>
  )
}

export default Students

