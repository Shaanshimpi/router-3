import { Link } from 'react-router-dom'

function StudentCard({ student, onDelete }) {
  return (
    <article className="student-card">
      <Link to={`/students/${student.id}`} className="student-card__link">
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

      {/* TODO: hook up the delete button by passing a function that calls your DELETE endpoint */}
      <button className="danger-btn" onClick={() => onDelete?.(student)}>
        Delete
      </button>
    </article>
  )
}

export default StudentCard


