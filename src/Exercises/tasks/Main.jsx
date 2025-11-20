import TasksList from './TasksList'

function TasksExercise() {
  return (
    <div className="app-shell">
      <h1>Tasks Collection Exercise</h1>
      <p className="page-tagline">
        Populate this kanban-style grid by finishing the API calls.
      </p>

      {/* TODO: add routing to show TaskDetails when you're ready */}
      <TasksList />
    </div>
  )
}

export default TasksExercise


