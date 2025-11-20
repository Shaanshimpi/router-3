import { useEffect, useState } from 'react'
import StudentCard from './components/StudentCard'

const API_URL = 'https://codehub-api-collections.vercel.app/api/students'

function StudentsList() {
  const [students, setStudents] = useState([])

  // Form fields are handled for you so learners can focus on the data flow.
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState('')
  const [grade, setGrade] = useState('')
  const [status, setStatus] = useState('active')
  const [message, setMessage] = useState('')

  useEffect(() => {
    // TODO: Fetch students from API_URL and call setStudents with `data.docs`.
    // Hint: use `const response = await fetch(API_URL)` inside an async function,
    // then `const data = await response.json()` and finally `setStudents(data.docs || [])`.
  }, [])

  function handleCreateStudent(event) {
    event.preventDefault()
    setMessage('')

    const newStudent = {
      fullName,
      email,
      age: Number(age),
      grade,
      status,
    }

    // TODO: POST `newStudent` to API_URL.
    // 1. Call fetch with method POST, JSON headers, and stringified body.
    // 2. Parse the JSON response and place it at the start of the students array:
    //    `setStudents([createdStudent, ...students])`.
    // 3. Reset all form fields back to empty strings (and status to "active").
    // 4. Show a friendly success message with setMessage.
  }

  function handleDeleteStudent(student) {
    if (!window.confirm('Delete this student?')) {
      return
    }

    // TODO: Send a DELETE request to `${API_URL}/${student.id}`.
    // After you get a good response back, filter that student out of the array:
    // `setStudents(prev => prev.filter(item => item.id !== student.id))`.
  }

  return (
    <main className="students-page">
      <h1>Students Directory (Exercise)</h1>
      <p className="page-tagline">
        Follow the inline TODOs to finish the CRUD flow.
      </p>

      <section className="student-form-panel">
        <h2>Add a student</h2>
        <form className="student-form" onSubmit={handleCreateStudent}>
          <div className="form-grid">
            <label>
              <span>Full name</span>
              <input
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
                required
              />
            </label>
            <label>
              <span>Email</span>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </label>
            <label>
              <span>Age</span>
              <input
                type="number"
                value={age}
                onChange={(event) => setAge(event.target.value)}
                required
              />
            </label>
            <label>
              <span>Grade</span>
              <input
                value={grade}
                onChange={(event) => setGrade(event.target.value)}
                required
              />
            </label>
            <label>
              <span>Status</span>
              <select
                value={status}
                onChange={(event) => setStatus(event.target.value)}
              >
                <option value="active">active</option>
                <option value="inactive">inactive</option>
                <option value="graduated">graduated</option>
              </select>
            </label>
          </div>
          <button className="primary-btn">Create student</button>
        </form>
        {message && <p className="form-status">{message}</p>}
      </section>

      <section className="cards-grid">
        {students.map((student) => (
          <StudentCard
            key={student.id}
            student={student}
            onDelete={handleDeleteStudent}
          />
        ))}
      </section>
    </main>
  )
}

export default StudentsList


