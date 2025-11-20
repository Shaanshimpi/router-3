import { useEffect, useState } from 'react'
import TaskCard from './components/TaskCard'

const API_URL = 'https://codehub-api-collections.vercel.app/api/tasks'

function TasksList() {
  const [tasks, setTasks] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchTasks() {
      try {
        const response = await fetch(API_URL)
        if (!response.ok) {
          throw new Error('Failed to load tasks')
        }
        const data = await response.json()
        setTasks(data.docs || [])
      } catch (err) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchTasks()
  }, [])

  return (
    <main className="collection-page tasks-page">
      <header className="collection-header">
        <p className="eyebrow">Delivery · Task Board</p>
        <h1>Tasks Collection</h1>
        <p className="page-tagline">
          Task management demonstrating PATCH updates and boolean toggles.
        </p>
      </header>

      {isLoading && <p>Loading tasks...</p>}
      {error && <p className="error-text">{error}</p>}

      <section className="tasks-board">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </section>
    </main>
  )
}

export default TasksList



