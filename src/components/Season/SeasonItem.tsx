import React, { useEffect, useState } from 'react'
// import { fetchEpisodes } from '../../api/useFetch'
import { IEpisode } from '../../types'
import EpisodeList from '../Episode/EpisodeList'

interface IEpisodeListProps {
  numOfSeason: number
  episodes: any[]
}

const SeasonItem: React.FC<IEpisodeListProps> = ({
  numOfSeason,
  episodes: episodesProps,
}) => {
  const [episodes, setEpisodes] = useState<any[]>()

  const filterEpisodes = () => {
    if (episodesProps) {
      const filterredEpisodes = episodesProps.filter(
        (episodeProps) =>
          +episodeProps.episode.split('E')[0].at(-1)! === numOfSeason
      )

      setEpisodes(filterredEpisodes)
    }
  }

  useEffect(() => {
    filterEpisodes()
  }, [episodesProps])

  return (
    <div>
      <EpisodeList
        numOfSeason={numOfSeason}
        key={numOfSeason}
        episodes={episodes}
      />
    </div>
  )
}

export default SeasonItem
