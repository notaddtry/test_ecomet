import React, { useEffect } from 'react'

interface ISearch {
  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>
  searchEpisodes: () => void
}

const Search: React.FC<ISearch> = ({ search, setSearch, searchEpisodes }) => {
  useEffect(() => {
    M.updateTextFields()
  }, [])

  const onKeyPressSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      searchEpisodes()
    }
  }

  return (
    <div className='row'>
      <div className='input-field col s11'>
        <input
          placeholder='Placeholder'
          id='first_name'
          type='text'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => onKeyPressSearch(e)}
          className='validate'
        />
        <label htmlFor='first_name'>First Name</label>
      </div>
      <button className='btn col s1' onClick={searchEpisodes}>
        <i className='material-icons flex_center'>search</i>
      </button>
    </div>
  )
}

export default Search
