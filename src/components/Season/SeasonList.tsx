import React, { useEffect, useState } from 'react'
import { fetchOneEpisode, fetchEpisodes } from '../../api'
import { IEpisode } from '../../types'
import SeasonItem from './SeasonItem'

const SEASONS = [
  {
    id: '1',
    name: 'first',
  },
  {
    id: '2',
    name: 'second',
  },
  {
    id: '3',
    name: 'third',
  },
  {
    id: '4',
    name: 'fourth',
  },
  {
    id: '5',
    name: 'fifth',
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
    <div>
      {SEASONS.map((season) => (
        <SeasonItem
          numOfSeason={+season.id}
          key={+season.id}
          episodes={episodes}
        />
      ))}
    </div>
  )
}

export default SeasonList
