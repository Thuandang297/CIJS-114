import Profile from './screens/Profile';
import './App.css';
import LoginPage from './screens/Login';
import { Routes, Route } from 'react-router'
import ListPost from './components/Post';
import UserProfile from './components/UserProfile';
function App() {

  return (
    <div className='app w-screen min-h-screen bg-[#F0F4F5]'>
      <Routes>
        <Route path='' element={<Profile />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/my-info' element={<Profile />} >
          <Route index element={<UserProfile />} />
          <Route path='information' element={< UserProfile />} />
          <Route path='my-posts' element={<ListPost />} >
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App;
