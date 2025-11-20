import { useEffect, useState } from 'react'
import TaskCard from './components/TaskCard'

const API_URL = 'https://codehub-api-collections.vercel.app/api/tasks'

function TasksList() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    // TODO: fetch tasks from API_URL, parse JSON, and call setTasks(data.docs || []).
    // Consider sorting by due date so the board feels organized.
  }, [])

  return (
    <main className="collection-page tasks-page">
      <header className="collection-header">
        <p className="eyebrow">Delivery · Task Board</p>
        <h1>Tasks Collection</h1>
        <p className="page-tagline">
          Once the fetch is wired up, this board renders live task cards.
        </p>
      </header>

      <section className="tasks-board">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </section>
    </main>
  )
}

export default TasksList


