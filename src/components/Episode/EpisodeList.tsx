import React, { useEffect, useState } from 'react'
import { IEpisode } from '../../types'
import EpisodeItem from './EpisodeItem'

interface IEpisodeListProps {
  episodes: any[] | undefined
}

const EpisodeList: React.FC<IEpisodeListProps> = ({ episodes }) => {
  return (
    <ul className='episodes_wrapper'>
      {episodes?.length ? (
        episodes?.map((episode) => (
          <li key={episode.id} className='row'>
            <EpisodeItem {...episode} />
          </li>
        ))
      ) : (
        <span>Серий не найдено</span>
      )}
    </ul>
  )
}

export default EpisodeList
