import './styles.css'


const Hello = () => {
  const isDisplay = true;
  const school = "MindX Technology School";
  const age = 20;
  // mảng này còn có thể là 1 mảng component được
  const listName = ["Alice", "John Wick", "Bob", "David"];
  return (
    <div>
      {
        isDisplay == true &&
        <>
          <h1 className={'HelloComponent'} style={{ textDecoration: 'underline', color: 'red' }}>Bạn là người {age >= 20 ? "trưởng thành" : "đang lớn"}!</h1>
          <p style={{ color: 'yellow' }}>Hello everyone, welcome to {school}</p>
          {listName.join(',')}
        </>
      }
    </div>
  )
}

export default Hello;