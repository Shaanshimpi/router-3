import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const API_BASE =
  'https://cors.isomorphic-git.org/https://codehub-api-collections.vercel.app/api/students'

function StudentDetails() {
  const { id } = useParams()
  const [student, setStudent] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchStudent() {
      try {
        const response = await fetch(`${API_BASE}/${id}`)
        if (!response.ok) {
          throw new Error('Unable to load student info')
        }
        const data = await response.json()
        setStudent(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchStudent()
  }, [id])

  return (
    <main className="student-details-page">
      <Link to="/students" className="back-link">
        ← Back to students
      </Link>

      {isLoading && <p>Loading student data...</p>}
      {error && <p className="error-text">{error}</p>}

      {student && (
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
      )}
    </main>
  )
}

export default StudentDetails

