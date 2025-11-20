import StudentsList from './StudentsList'
// TODO: import StudentDetails once you wire up routing

function StudentsExercise() {
  return (
    <div className="app-shell">
      <h1>Students Exercise</h1>
      <p className="page-tagline">
        Rebuild the CodeHub students CRUD experience by completing the TODOs in
        these files.
      </p>

      {/* TODO: Add react-router routes so /students shows StudentsList and /student/:id shows StudentDetails */}
      <StudentsList />
    </div>
  )
}

export default StudentsExercise


