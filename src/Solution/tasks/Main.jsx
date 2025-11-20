import { Route, Routes } from 'react-router-dom'
import TasksList from './TasksList'
import TaskDetails from './TaskDetails'

function Tasks() {
  return (
    <div className="app-shell">
      <Routes>
        <Route index element={<TasksList />} />
        <Route path=":id" element={<TaskDetails />} />
        <Route path="*" element={<p>Task not found.</p>} />
      </Routes>
    </div>
  )
}

export default Tasks



