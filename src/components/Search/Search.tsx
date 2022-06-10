import React, { useEffect } from 'react'

interface ISearch {
  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>
  searchEpisodes: () => void
  numOfSeason: number
}

const Search: React.FC<ISearch> = ({
  search,
  setSearch,
  searchEpisodes,
  numOfSeason,
}) => {
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
          id={`${numOfSeason}_search`}
          type='text'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => onKeyPressSearch(e)}
        />
        <label htmlFor={`${numOfSeason}_search`}>First Name</label>
      </div>
      <button
        className='btn col s1 deep-purple darken-1'
        onClick={searchEpisodes}>
        <i className='material-icons flex_center'>search</i>
      </button>
    </div>
  )
}

export default Search
