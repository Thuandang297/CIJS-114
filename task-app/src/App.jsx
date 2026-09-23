import { Route, Routes } from "react-router"
import Login from './routes/login.jsx'
import DashBoard from './routes/dashboard.jsx'

function App() {

  const isLogin = localStorage.getItem('isLogin')
  console.log("🚀 ~ App ~ isLogin:", isLogin)
  return (
    <>
      <Routes path="/task-app">
        <Route path='' element={<Login />} />
        <Route path="/login" element={<Login />} />
        {isLogin &&
          <Route path="/dashboard" element={<DashBoard />} />
        }
      </Routes>
    </>
  )
}

export default App
