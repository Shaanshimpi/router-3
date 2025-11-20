import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const API_URL = 'https://codehub-api-collections.vercel.app/api/students'

function StudentDetails() {
  const [student, setStudent] = useState(null)

  useEffect(() => {
    // TODO: grab the id with `const { id } = useParams()`
    // and fetch `${API_URL}/${id}` inside an async function.
    // After you parse the JSON, call setStudent(data) so the summary card renders.
  }, [])

  return (
    <main className="student-details-page">
      <Link to="/students" className="back-link">
        ← Back to students
      </Link>

      {student ? (
        <article className="student-details-card">
          <h1>{student.fullName}</h1>
          <ul>
            <li>
              <strong>Email:</strong> {student.email}
            </li>
            <li>
              <strong>Age:</strong> {student.age}
            </li>
            <li>
              <strong>Grade:</strong> {student.grade}
            </li>
            <li>
              <strong>Status:</strong> {student.status}
            </li>
          </ul>
          <p className="note">
            This info comes from the CodeHub Students Collection API.
          </p>
        </article>
      ) : (
        <p>TODO: load a student and render their data here.</p>
      )}
    </main>
  )
}

export default StudentDetails


