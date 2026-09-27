import { useEffect, useState } from 'react'
import { FlagFilled } from '@ant-design/icons'
import { users } from '../../data'

const CreateTaskModal = ({ statuses, initialTask, onClose, onSaveTask }) => {
  const [title, setTitle] = useState(initialTask?.title ?? '')
  const [description, setDescription] = useState(initialTask?.description ?? '')
  const [deadline, setDeadline] = useState(
    initialTask?.deadline ? String(initialTask.deadline).slice(0, 10) : ''
  )
  const [assignedTo, setAssignedTo] = useState(String(initialTask?.assignedTo ?? users[0].userId))
  const [statusId, setStatusId] = useState(initialTask ? String(initialTask.statusId) : '')
  const [titleError, setTitleError] = useState(false)
  const [statusError, setStatusError] = useState(false)

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  const handleSubmit = (event) => {
    event.preventDefault()
    const trimmedTitle = title.trim()
    setTitleError(!trimmedTitle)
    setStatusError(!statusId)
    if (!trimmedTitle) {
      return
    }
    if (!statusId) return

    onSaveTask({
      ...initialTask,
      taskId: initialTask?.taskId ?? Date.now(),
      title: trimmedTitle,
      description: description.trim(),
      deadline,
      assignedTo: Number(assignedTo),
      statusId: Number(statusId),
      attachCount: initialTask?.attachCount ?? 0,
    })
  }

  return (
    <div
      className="create-task-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <section className="create-task-modal" role="dialog" aria-modal="true" aria-labelledby="create-task-title">
        <div className="create-task-modal-header">
          <span className="create-task-icon" aria-hidden="true"><FlagFilled /></span>
          <button className="create-task-close" type="button" onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>

        <h2 id="create-task-title">{initialTask ? 'Edit task' : 'Save task'}</h2>

        <form onSubmit={handleSubmit} noValidate>
          <div className="create-task-fields">
            <label className="create-task-field create-task-title-field">
              <span>Title <strong>*</strong></span>
              <input
                autoFocus
                value={title}
                onChange={(event) => {
                  setTitle(event.target.value)
                  if (event.target.value.trim()) setTitleError(false)
                }}
                placeholder="Type title of task"
                aria-invalid={titleError}
                aria-describedby={titleError ? 'create-task-title-error' : undefined}
              />
              {titleError && <small id="create-task-title-error">Title is required</small>}
            </label>

            <label className="create-task-field">
              <span>End Date</span>
              <input type="date" value={deadline} onChange={(event) => setDeadline(event.target.value)} />
            </label>

            <label className="create-task-field">
              <span>Description</span>
              <textarea
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                placeholder="Type description..."
                rows="3"
              />
            </label>

            <label className="create-task-field">
              <span>Assign</span>
              <select value={assignedTo} onChange={(event) => setAssignedTo(event.target.value)}>
                {users.map((user) => (
                  <option key={user.userId} value={user.userId}>{user.name}</option>
                ))}
              </select>
            </label>

            <label className="create-task-field create-task-status-field">
              <span>Status</span>
              <select
                value={statusId}
                onChange={(event) => {
                  setStatusId(event.target.value)
                  if (event.target.value) setStatusError(false)
                }}
                aria-invalid={statusError}
                aria-describedby={statusError ? 'create-task-status-error' : undefined}
              >
                <option value="">Choose status</option>
                {statuses.map((status) => (
                  <option key={status.statusId} value={status.statusId}>{status.name}</option>
                ))}
              </select>
              {statusError && <small id="create-task-status-error">Status is required</small>}
            </label>
          </div>

          <div className="create-task-actions">
            <button className="create-task-cancel" type="button" onClick={onClose}>Cancel</button>
            <button className="create-task-save" type="submit">{initialTask ? 'Update' : 'Save'}</button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default CreateTaskModal
