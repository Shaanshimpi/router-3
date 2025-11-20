import { Link } from 'react-router-dom'

const PRIORITY_COLORS = {
  high: 'pill-danger',
  medium: 'pill-warning',
  low: 'pill-neutral',
}

function TaskCard({ task }) {
  return (
    <Link to={`/tasks/${task.id}`} className="task-card">
      <header>
        <span className={`pill ${PRIORITY_COLORS[task.priority] || ''}`}>
          {task.priority}
        </span>
        {task.completed && <span className="task-card__complete">Done</span>}
      </header>

      <h2>{task.title}</h2>
      <p>{task.description}</p>

      <footer>
        <span>Due {task.dueDate}</span>
        <span className="task-card__cta">Open</span>
      </footer>
    </Link>
  )
}

export default TaskCard


