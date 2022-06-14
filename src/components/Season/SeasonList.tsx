import React from 'react'

import SeasonItem from './SeasonItem'

const SEASONS = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
]

const SeasonList: React.FC = () => {
  return (
    <ul className='seasons_wrapper'>
      {SEASONS.map((season) => (
        <li className='row' key={season.id}>
          <SeasonItem numOfSeason={season.id} />
        </li>
      ))}
    </ul>
  )
}

export default SeasonList
