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
  const onKeyPressSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      searchEpisodes()
    }
  }

  useEffect(() => {
    M.updateTextFields()
  }, [])

  return (
    <div className='row'>
      <div className='input-field col s11'>
        <input
          placeholder='Enter name of episode..'
          id={`${numOfSeason}_search`}
          type='text'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => onKeyPressSearch(e)}
        />
        <label htmlFor={`${numOfSeason}_search`}>
          Episode's name in {numOfSeason} season
        </label>
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
