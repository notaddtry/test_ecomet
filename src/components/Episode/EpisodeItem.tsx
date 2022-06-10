import React from 'react'
import { Link } from 'react-router-dom'

import styles from './episode.module.css'

interface IEpisode {
  id: number
  name: string
  air_date: string
  episode: string
  characters: string[]
}

const EpisodeItem: React.FC<IEpisode> = ({
  id,
  name,
  air_date: date,
  episode,
  characters,
}) => {
  return (
    <div className='col s12'>
      <div className='row flex_center'>
        <Link
          className={`col s2 block_center center ${styles.text_columns}`}
          to={`/episode/${id}`}>
          <span>{id}</span>
        </Link>
        <span className={`col s2 block_center center ${styles.text_columns}`}>
          {name}
        </span>
        <span className={`col s2 block_center center ${styles.text_columns}`}>
          {date}
        </span>
        <span className={`col s2 block_center center ${styles.text_columns}`}>
          {episode.slice(4, 6)}
        </span>
        <span className={`col s2 block_center center ${styles.text_columns}`}>
          {characters.length}
        </span>
      </div>
    </div>
  )
}

export default EpisodeItem
