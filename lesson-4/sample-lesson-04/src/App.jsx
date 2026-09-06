import { useState } from "react"
import UserInfoForm from "./components/UserInfoForm"
import TodoApp from "./components/TodoApp"

function App() {

  const [userName, setUserName] = useState()
  const [userEmail, setUserEmail] = useState()


  const handleClickSubmit = (userName, userEmail) => {
    //Set state cho userName
    setUserName(userName)
    //Set state cho userEmail
    setUserEmail(userEmail)
  }
  return (
    <>
      <span>**************Bài 1***************</span>
      <UserInfoForm onClickSubmit={handleClickSubmit} />
      <div className="text-parent" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <span>Name:{userName}</span>
        <span>Email:{userEmail}</span>
      </div>
      <br />
      <span>**************Bài 2***************</span>
      <TodoApp/>
    </>

  )
}

export default App
