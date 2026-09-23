import { useSearchParams } from 'react-router';
import './style.css'
const SearchBox = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const handleChangeSearch = (e) => {
    const searchVal = e.target.value
    setSearchParams({ search: searchVal })
  }
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 10px', height: 'auto' }}>
      <div class="search-container">
        <img className='search-icon' src="public\icons\search.svg" alt="" srcset="" />
        <input onChange={handleChangeSearch} type="text" class="search-input" placeholder="Search Items" />
      </div>
      <button style={{ border: 'none', color: '#fff', height: '40px', backgroundColor: '#0013FE', borderRadius: '5px', padding: '10px 23px' }}>New Item</button>
    </div>
  )
}

export default SearchBox