import { tasks, users } from '../../data'
import Task from '../Task'
import './styles.css'
const Column = (props) => {
  const { statusName = "Test", totalTasks, statusId } = props
  return (
    <div style={{ backgroundColor: '#E6ECF0', borderRadius: '5px', minWidth: '318px', flex: 1, padding: '10px', overflowY: 'auto' }}>
      {/* Title */}
      <div style={{ padding: '24px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} className='columnTitle'>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '21px' }} className='title'>
          <p>{statusName}</p>
          <button className='iconBtn'>{totalTasks}</button>
        </div>

        <div style={{ display: 'flex', gap: '6px' }} className='icons'>
          <button className='iconBtn'>+</button>
          <button className='iconBtn'>...</button>
        </div>
      </div>

      {/* Tasks */}
      <div style={{ display: 'flex', flexDirection: 'column', rowGap: '12px' }} className="tasks">
        {tasks.filter(task => task.statusId === statusId)
          .map(task => {
            return <Task
              title={task.title}
              description={task.description}
              userName={users.find(user => user.userId === task.assignedTo).name}
              estimateDate={(task.deadline).toDateString()}
              flagId={task.flagId}
            />;
          })}
      </div>
    </div>
  )
}

export default Column