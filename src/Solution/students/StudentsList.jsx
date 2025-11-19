import { useEffect, useState } from 'react'
import StudentCard from './components/StudentCard'

const API_URL =
  'https://cors.isomorphic-git.org/https://codehub-api-collections.vercel.app/api/students'

function StudentsList() {
  const [students, setStudents] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchStudents() {
      try {
        const response = await fetch(API_URL)
        if (!response.ok) {
          throw new Error('Failed to load students')
        }
        const data = await response.json()
        setStudents(data.docs || [])
      } catch (err) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchStudents()
  }, [])

  return (
    <main className="students-page">
      <h1>Students Directory</h1>
      <p className="page-tagline">
        Simple cards showing data from the CodeHub Students API.
      </p>

      {isLoading && <p>Loading students...</p>}
      {error && <p className="error-text">{error}</p>}

      <section className="cards-grid">
        {students.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </section>
    </main>
  )
}

export default StudentsList

