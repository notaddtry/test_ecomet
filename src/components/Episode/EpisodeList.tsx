import React, { useEffect, useState } from 'react'
import { IEpisode } from '../../types'
import EpisodeItem from './EpisodeItem'

import styles from './episode.module.css'
import { sortById } from '../../lib/helpers'

interface IEpisodeListProps {
  episodes: IEpisode[] | undefined
}

const EpisodeList: React.FC<IEpisodeListProps> = ({
  episodes: episodesProps,
}) => {
  const [sortedEpisodes, setSortedEpisodes] = useState({
    byId: false,
    byName: false,
    byDate: false,
    byNumOfEp: false,
    byLenOfChar: false,
  })
  const [episodes, setEpisodes] = useState<IEpisode[] | undefined>([])

  const logClick = () => {
    console.log(episodes)
  }

  const handleSort = (
    propsToSort: 'byId' | 'byName' | 'byDate' | 'byNumOfEp' | 'byLenOfChar'
  ) => {
    setSortedEpisodes((prev) => ({
      byId: false,
      byName: false,
      byDate: false,
      byNumOfEp: false,
      byLenOfChar: false,

      [propsToSort]: !prev[propsToSort],
    }))
    if (episodesProps) {
      const newEpisodes = sortById(
        episodesProps,
        sortedEpisodes[propsToSort],
        propsToSort
      )
      setEpisodes(newEpisodes)
    }
  }

  useEffect(() => {}, [sortedEpisodes])

  useEffect(() => {
    setEpisodes(episodesProps)
  }, [episodesProps])

  return (
    <>
      <button onClick={logClick}>log</button>
      <div className='row flex_center'>
        <span
          className={`col s2 block_center center ${styles.text_columns}`}
          onClick={() => handleSort('byId')}>
          Id эпизода
          <i className='material-icons tiny'>
            {sortedEpisodes.byId ? 'arrow_drop_up' : 'arrow_drop_down'}
          </i>
        </span>
        <span
          className={`col s2 block_center center ${styles.text_columns}`}
          onClick={() => handleSort('byName')}>
          Название
          <i className='material-icons tiny'>
            {sortedEpisodes.byName ? 'arrow_drop_up' : 'arrow_drop_down'}
          </i>
        </span>
        <span
          className={`col s2 block_center center ${styles.text_columns}`}
          onClick={() => handleSort('byDate')}>
          Дата выхода
          <i className='material-icons tiny'>
            {sortedEpisodes.byDate ? 'arrow_drop_up' : 'arrow_drop_down'}
          </i>
        </span>
        <span
          className={`col s2 block_center center ${styles.text_columns}`}
          onClick={() => handleSort('byNumOfEp')}>
          Номер в сезоне
          <i className='material-icons tiny'>
            {sortedEpisodes.byNumOfEp ? 'arrow_drop_up' : 'arrow_drop_down'}
          </i>
        </span>
        <span
          className={`col s2 block_center center ${styles.text_columns}`}
          onClick={() => handleSort('byLenOfChar')}>
          Число персонажей
          <i className='material-icons tiny'>
            {sortedEpisodes.byLenOfChar ? 'arrow_drop_up' : 'arrow_drop_down'}
          </i>
        </span>
      </div>
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
    </>
  )
}

export default EpisodeList
