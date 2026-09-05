import Column from './components/Column'
import SearchBox from './components/SearchBox'
import { tasks, taskStatus } from './data'
function App() {
  return (
    <>
      {/* Board */}
      <div style={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column' }}>
        {/* SearchBox */}
        <SearchBox />

        {/* Columns */}
        <div className="classColumn" style={{
          width: '100%',
          maxWidth: '100%',
          padding: '10px',
          display: 'flex',
          flexDirection: 'row',
          columnGap: '16px',
          boxSizing: 'border-box',
          flex: 1,
          overflowX: 'auto',
          whiteSpace: 'nowrap'
        }} >
          {taskStatus.map(column =>
            <Column statusId={column.statusId} totalTasks={tasks.filter(task => task.statusId === column.statusId).length} statusName={column.name} />
          )}
        </div>
      </div>

    </>
  )
}

export default App
