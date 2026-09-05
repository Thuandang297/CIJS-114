const SearchBox = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '18px 0px' }}>
      <input style={{ width: '318px', height: '40px' }} placeholder='Search Items'></input>
      <button style={{ border: 'none', color: '#fff', height: '40px', backgroundColor: '#0013FE', borderRadius: '5px', padding: '10px 23px' }}>New Item</button>
    </div>
  )
}

export default SearchBox