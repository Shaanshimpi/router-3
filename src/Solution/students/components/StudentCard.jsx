import { Link } from 'react-router-dom'

function StudentCard({ student }) {
  return (
    <Link to={`/student/${student.id}`} className="student-card">
      <p className="student-name">{student.fullName}</p>
      <p className="student-email">{student.email}</p>
      <div className="student-meta">
        <span>Age: {student.age}</span>
        <span>Grade: {student.grade}</span>
      </div>
      <span className={`student-status status-${student.status}`}>
        {student.status}
      </span>
    </Link>
  )
}

export default StudentCard

