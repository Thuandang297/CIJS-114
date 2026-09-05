import './styles.css';

const Card = (props) => {

  const { name = "MindX School", age = "18" } = props
  console.log('🚀 ~ Card ~ age:', age)
  console.log('🚀 ~ Card ~ name:', name)

  return (
    <div className="card">
      <div className="name">Name:{name}</div>
      <div className="age">Age: {age}</div>
    </div>
  )
}

export default Card;