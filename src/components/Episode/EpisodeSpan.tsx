import React from 'react'

import styles from './episode.module.css'

interface ISortedEpisodes {
  sortedEpisodesProp?:
    | 'byId'
    | 'byName'
    | 'byDate'
    | 'byNumOfEp'
    | 'byLenOfChar'
}

interface IEpisodeSpanProps {
  sortedEpisodes?: {
    byId: false
    byName: false
    byDate: false
    byNumOfEp: false
    byLenOfChar: false
  }
  sortedEpisodesProp?: ISortedEpisodes
  handleSort?: (sortedEpisodesProp: ISortedEpisodes) => void
}

const EpisodeSpan: React.FC<IEpisodeSpanProps> = ({
  handleSort,
  sortedEpisodes,
  sortedEpisodesProp,
}) => {
  return (
    // <span
    //   className={`col s2 block_center center ${styles.text_columns}`}
    //   onClick={() => handleSort(sortedEpisodesProp)}>
    //   Дата выхода
    //   {sortedEpisodes && sortedEpisodesProp ? (
    //     <i className='material-icons tiny'>
    //       {sortedEpisodes[sortedEpisodesProp]
    //         ? 'arrow_drop_up'
    //         : 'arrow_drop_down'}
    //     </i>
    //   ) : (
    //     <></>
    //   )}
    // </span> TODO
    <></>
  )
}

export default EpisodeSpan
