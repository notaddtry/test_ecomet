import { useStore } from 'effector-react'
import React, { useEffect, useState } from 'react'

import { $episodes, getEpisodesFx } from '../../store'
import { IEpisode } from '../../types'

import EpisodeList from '../Episode/EpisodeList'
import Search from '../Search/Search'

interface IEpisodeListProps {
  numOfSeason: number
}

const SeasonItem: React.FC<IEpisodeListProps> = ({ numOfSeason }) => {
  const [episodes, setEpisodes] = useState<IEpisode[]>([])
  const [search, setSearch] = useState('')
  const episodesStore = useStore($episodes)

  const filterEpisodes = () => {
    if (episodesStore) {
      const filterredEpisodes = episodesStore.filter(
        (episode) => +episode.episode.split('E')[0].at(-1)! === numOfSeason
      )

      return filterredEpisodes
    }
  }

  const searchEpisodes = () => {
    const data = filterEpisodes()
    if (data) {
      if (!search.trim()) {
        return setEpisodes(data)
      }
      const filterredEpisodes = data?.filter((episode) => {
        return episode.name.toLowerCase().includes(search.toLowerCase())
      })
      setEpisodes(filterredEpisodes)
    }
  }

  useEffect(() => {
    getEpisodesFx()
  }, [])

  useEffect(() => {
    const data = filterEpisodes()
    if (data) {
      setEpisodes(data)
    }
    // eslint-disable-next-line
  }, [episodesStore])

  return (
    <div className='col s12'>
      <h2>Сезон {numOfSeason}</h2>
      <Search
        search={search}
        setSearch={setSearch}
        searchEpisodes={searchEpisodes}
        numOfSeason={numOfSeason}
      />
      <EpisodeList key={numOfSeason} episodes={episodes} />
    </div>
  )
}

export default SeasonItem
