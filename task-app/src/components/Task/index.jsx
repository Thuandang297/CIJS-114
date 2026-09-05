
const Task = (props) => {

  const { title, description, userName, attachCount, estimateDate, flagId } = props
  return (
    <div style={{ backgroundColor: '#fff' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '12px' }} className="head-content">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} className='header'>
          <p style={{ fontFamily: 'Roboto', fontWeight: 700 }}>{title}</p>
          <img src="public\icons\edit.svg" alt="" width='24px' height='24px' />
        </div>

        <div style={{ width: '100%', textWrap: 'auto' }}>
          <p>{description}</p>
        </div>

        <div style={{ fontWeight: 500, color: '#fff', backgroundColor: '#0013FE', borderRadius: '5px', padding: '4px 12px', width: 'fit-content' }}>
          <p>{userName}</p>
        </div>
      </div>

      <div style={{ padding: '8px 12px', display: 'flex', justifyContent: 'center', borderTop: '1px solid #ece9e9' }} content='footer'>
        <div className="icon-items" style={{ display: 'flex', justifyContent: 'space-between', gap: '12px' }}>
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <img src="public\icons\attach.svg" style={{ width: '24px', height: '24px' }} />
            {attachCount}
          </span>
          <span style={{ display: 'flex', alignItems: 'center' }}>
            {flagId == 1 && <img src="public\icons\red-flag.svg" style={{ width: '24px', height: '24px' }} />}
            {flagId == 2 && <img src="public\icons\yellow-flag.svg" style={{ width: '24px', height: '24px' }} />}
            {flagId == 3 && <img src="public\icons\green-flag.svg" style={{ width: '24px', height: '24px' }} />}
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '2px', fontWeight: '700' }}>
            <img src="public\icons\clock.svg" style={{ width: '24px', height: '24px' }} />
            {estimateDate}
          </span>
        </div>
      </div>
    </div>
  )
}
export default Task