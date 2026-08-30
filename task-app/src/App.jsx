import Column from './components/Column'
import SearchBox from './components/SearchBox'
function App() {
  return (
    <>
      {/* Board */}
      <div style={{ width: '100%', height: '100vh' }}>
        {/* SearchBox */}
        <SearchBox />

        {/* Columns */}
        <Column />
      </div>

    </>
  )
}

export default App
