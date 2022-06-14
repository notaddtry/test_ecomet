import React from 'react'
import { ISortedEpisodes } from '../../types'

import styles from './episode.module.css'

interface IEpisodeSpanProps {
  prop: ISortedEpisodes
  handleSort: (sortedEpisodesProp: ISortedEpisodes) => void
  message: string
}

const EpisodeSpan: React.FC<IEpisodeSpanProps> = ({
  handleSort,
  prop,
  message,
}) => {
  return (
    <span
      className={`col s2 block_center center ${styles.text_columns}`}
      onClick={() => handleSort(prop)}>
      {message}
    </span>
  )
}

export default EpisodeSpan
