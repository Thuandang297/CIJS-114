import './styles.css'
const Column = (props) => {
  const { statusName = "Test", totalTasks = "3" } = props
  return (
    <div style={{ backgroundColor: '#E6ECF0', borderRadius: '5px', width: '318px', height: '100%' }}>
      {/* Title */}
      <div style={{ padding: '24px 16px', display: 'flex', justifyContent: 'space-between' }} className='columnTitle'>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '21px' }} className='title'>
          <p>{statusName}</p>
          <button className='iconBtn'>{totalTasks}</button>
        </div>

        <div style={{ display: 'flex', gap: '6px' }} className='icons'>
          <button className='iconBtn'>+</button>
          <button className='iconBtn'>...</button>
        </div>

      </div>

      {/* Tasks */}
    </div>
  )
}

export default Column