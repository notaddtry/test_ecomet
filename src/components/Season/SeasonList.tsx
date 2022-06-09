import React, { useCallback, useEffect, useState } from 'react'
import { fetchOneEpisode, fetchEpisodes } from '../../api'
import { IEpisode } from '../../types'
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

const SeasonList = () => {
  const [episodes, setEpisodes] = useState<any>()

  const loadEpisodes = async () => {
    let AllResult = await fetchEpisodes()
    let resultAll: any[] = []
    AllResult.forEach((result) => {
      resultAll.push(result.results)
    })
    resultAll = resultAll.flat()
    setEpisodes(resultAll)
  }

  useEffect(() => {
    loadEpisodes()
  }, [])

  return (
    <ul className='seasons_wrapper'>
      {SEASONS.map((season) => (
        <li className='row' key={season.id}>
          <SeasonItem numOfSeason={season.id} episodes={episodes} />
        </li>
      ))}
    </ul>
  )
}

export default SeasonList
