import React, { useEffect, useState } from 'react'
import { IEpisode } from '../../types'
import EpisodeItem from './EpisodeItem'

interface IEpisodeListProps {
  numOfSeason: number
  episodes: any[] | undefined
}

const EpisodeList: React.FC<IEpisodeListProps> = ({ episodes }) => {
  return (
    <div>
      {episodes?.map((episode) => (
        <EpisodeItem {...episode} key={episode.id} />
      ))}
    </div>
  )
}

export default EpisodeList
