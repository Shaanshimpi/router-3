import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function TaskDetails() {
  const { id } = useParams()
  const [task, setTask] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchTask() {
      try {
        const response = await fetch(
          `https://codehub-api-collections.vercel.app/api/tasks/${id}`,
        )
        if (!response.ok) {
          throw new Error('Unable to load task info')
        }
        const data = await response.json()
        setTask(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchTask()
  }, [id])

  return (
    <main className="collection-page task-details-page">
      <Link to="/tasks" className="back-link">
        ← Back to tasks
      </Link>

      {isLoading && <p>Loading task...</p>}
      {error && <p className="error-text">{error}</p>}

      {task && (
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
              <p className="value">
                {new Date(task.dueDate).toLocaleDateString()}
              </p>
            </div>
            <div>
              <p className="label">Status</p>
              <p className="value">
                {task.completed ? 'Completed' : 'In progress'}
              </p>
            </div>
            <div>
              <p className="label">Created</p>
              <p className="value">
                {new Date(task.createdAt).toLocaleDateString()}
              </p>
            </div>
            <div>
              <p className="label">Updated</p>
              <p className="value">
                {new Date(task.updatedAt).toLocaleDateString()}
              </p>
            </div>
          </section>
        </article>
      )}
    </main>
  )
}

export default TaskDetails



