import React, { useEffect, useState } from 'react'
// import { fetchEpisodes } from '../../api/useFetch'
import { IEpisode } from '../../types'
import EpisodeList from '../Episode/EpisodeList'
import Search from '../Search/Search'

interface IEpisodeListProps {
  numOfSeason: number
  episodes: any[]
}

const SeasonItem: React.FC<IEpisodeListProps> = ({
  numOfSeason,
  episodes: episodesProps,
}) => {
  const [episodes, setEpisodes] = useState<IEpisode[]>([])
  const [searchedEpisodes, setSearchedEpisodes] =
    useState<IEpisode[] | null>(null)
  const [search, setSearch] = useState('')

  const filterEpisodes = () => {
    if (episodesProps) {
      const filterredEpisodes = episodesProps.filter(
        (episodeProps) =>
          +episodeProps.episode.split('E')[0].at(-1)! === numOfSeason
      )

      setEpisodes(filterredEpisodes)
    }
  }

  const searchEpisodes = () => {
    if (!search.trim()) {
      setSearchedEpisodes([])
    }
    const filterredEpisodes = episodes?.filter((episode) =>
      episode.name.includes(search)
    )
    setSearchedEpisodes(filterredEpisodes)
  }

  useEffect(() => {
    filterEpisodes()
  }, [episodesProps])

  return (
    <div className='col s12'>
      <h2>Сезон {numOfSeason}</h2>
      <Search
        search={search}
        setSearch={setSearch}
        searchEpisodes={searchEpisodes}
      />
      <EpisodeList
        key={numOfSeason}
        episodes={searchedEpisodes ? searchedEpisodes : episodes}
      />
    </div>
  )
}

export default SeasonItem
