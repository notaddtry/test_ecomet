import React from 'react'
import { ISortedEpisodes } from '../../types'

import styles from './episode.module.css'

interface IEpisodeSpanProps {
  sortedEpisodes: {
    byId: boolean
    byName: boolean
    byDate: boolean
    byNumOfEp: boolean
    byLenOfChar: boolean
  }
  prop: ISortedEpisodes
  handleSort: (sortedEpisodesProp: ISortedEpisodes) => void
  message: string
}

const EpisodeSpan: React.FC<IEpisodeSpanProps> = ({
  handleSort,
  sortedEpisodes,
  prop,
  message,
}) => {
  return (
    <span
      className={`col s2 block_center center ${styles.text_columns}`}
      onClick={() => handleSort(prop)}>
      {message}
      <i className='material-icons tiny'>
        {sortedEpisodes[prop] ? 'arrow_drop_up' : 'arrow_drop_down'}
      </i>
    </span>
  )
}

export default EpisodeSpan
