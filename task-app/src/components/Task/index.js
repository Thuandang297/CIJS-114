const Task = (props) => {

  const { title, description, userName } = props
  return (
    <div>
      <div className='header'>
        <p>{title}</p>
        {/* icon */}
      </div>

      <div content='content'>
        <p>{description}</p>
        <button>{userName}</button>
      </div>
      <div content='footer'>

      </div>
    </div>
  )
}
export default Task