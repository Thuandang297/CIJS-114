import { ClockCircleFilled, EditFilled, FlagFilled } from "@ant-design/icons"
import Text from "antd/es/typography/Text"

const Task = (props) => {

  const { title, description, userName, attachCount, estimateDate, flagId } = props
  return (
    <div style={{ backgroundColor: '#fff' }}>
      <div className="flex flex-col gap-3 p-3">
        <div className="flex justify-between items-center">
          <Text style={{ fontFamily: 'Roboto', fontWeight: 700}}>{title}</Text>
           <EditFilled  style={{fontSize:'24px'}}/>
        </div>

        <div className="w-100% text-wrap items-center">
          <Text>{description}</Text>
        </div>

        <div className="font-bold " style={{ fontWeight: 500, color: '#fff', backgroundColor: '#0013FE', borderRadius: '5px', padding: '4px 12px', width: 'fit-content' }}>
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
            {flagId == 1 && <FlagFilled style={{color:'red', fontSize:'24px'}} />}
            {flagId == 2 && <FlagFilled style={{color:'yellow',fontSize:'24px'}} />}
            {flagId == 3 && <FlagFilled style={{color:'green',fontSize:'24px'}} />}
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '2px', fontWeight: '700' }}>
            <ClockCircleFilled style={{fontSize:'24px'}} />
            {estimateDate}
          </span>
        </div>
      </div>
    </div>
  )
}
export default Task