import { useState } from 'react'
import { PlusOutlined } from '@ant-design/icons'
import { useSearchParams } from 'react-router'
import CreateTaskModal from './CreateTaskModal'
import './style.css'

const SearchBox = ({ statuses, onCreateTask }) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)

  const handleChangeSearch = (e) => {
    const searchVal = e.target.value
    setSearchParams({ search: searchVal })
  }

  return (
    <>
      <div className="search-toolbar">
        <div className="search-container">
          <img className="search-icon" src="/icons/search.svg" alt="" />
          <input onChange={handleChangeSearch} type="text" className="search-input" placeholder="Search Items" />
        </div>
        <button className="new-item-button" type="button" onClick={() => setIsCreateModalOpen(true)}>
          <PlusOutlined aria-hidden="true" />
          New Item
        </button>
      </div>

      {isCreateModalOpen && (
        <CreateTaskModal
          statuses={statuses}
          onClose={() => setIsCreateModalOpen(false)}
          onSaveTask={(task) => {
            onCreateTask(task)
            setIsCreateModalOpen(false)
          }}
        />
      )}
    </>
  )
}

export default SearchBox