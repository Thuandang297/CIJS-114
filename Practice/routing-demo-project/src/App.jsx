import Profile from './screens/Profile';
import './App.css';
import LoginPage from './screens/Login';
import { Routes, Route } from 'react-router'
import ListPost from './components/Post';
import UserProfile from './components/UserProfile';
import HookComponent from './components/HooksComponent';
import Memo from './components/HooksComponent/memo.jsx';
import UseMemo from './components/HooksComponent/UseMemo.jsx';
import UseCallback from './components/HooksComponent/UseCallback.jsx';
function App() {

  return (
    <div className='app w-screen min-h-screen bg-[#F0F4F5]'>
      <Routes>
        <Route path='' element={<HookComponent />} />
        <Route path='/memo' element={<Memo />} />
        <Route path='/use-callback' element={<UseCallback />} />
        <Route path='/use-memo' element={<UseMemo />} />
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
