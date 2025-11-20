import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const API_URL = 'https://codehub-api-collections.vercel.app/api/tasks'

function TaskDetails() {
  const [task, setTask] = useState(null)

  useEffect(() => {
    // TODO: use useParams to get the id, fetch `${API_URL}/${id}`,
    // and call setTask(data) after parsing JSON.
  }, [])

  return (
    <main className="collection-page task-details-page">
      <Link to="/tasks" className="back-link">
        ← Back to tasks
      </Link>

      {task ? (
        <article className="task-details-card">
          <header>
            <p className="eyebrow">Task #{task.id}</p>
            <h1>{task.title}</h1>
            <span className={`pill pill-${task.priority}`}>
              {task.priority} priority
            </span>
          </header>

          <p className="task-details-card__body">{task.description}</p>

          <section className="task-details-grid">
            <div>
              <p className="label">Due</p>
              <p className="value">{task.dueDate}</p>
            </div>
            <div>
              <p className="label">Status</p>
              <p className="value">
                {task.completed ? 'Completed' : 'In progress'}
              </p>
            </div>
            <div>
              <p className="label">Created</p>
              <p className="value">{task.createdAt}</p>
            </div>
            <div>
              <p className="label">Updated</p>
              <p className="value">{task.updatedAt}</p>
            </div>
          </section>
        </article>
      ) : (
        <p>TODO: load a task and render its data.</p>
      )}
    </main>
  )
}

export default TaskDetails


