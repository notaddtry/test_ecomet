import React, { useEffect, useState } from 'react'
import { IEpisode, ISortedEpisodes } from '../../types'
import EpisodeItem from './EpisodeItem'

import { sortById } from '../../lib/helpers'
import EpisodeSpan from './EpisodeSpan'

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

  const handleSort = (propsToSort: ISortedEpisodes) => {
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

  useEffect(() => {
    setEpisodes(episodesProps)
  }, [episodesProps])

  return (
    <>
      <button onClick={logClick}>log</button>
      <div className='row flex_center'>
        <EpisodeSpan
          sortedEpisodes={sortedEpisodes}
          prop={'byId'}
          handleSort={handleSort}
          message={'Id эпизода'}
        />
        <EpisodeSpan
          sortedEpisodes={sortedEpisodes}
          prop={'byName'}
          handleSort={handleSort}
          message={'Название'}
        />
        <EpisodeSpan
          sortedEpisodes={sortedEpisodes}
          prop={'byDate'}
          handleSort={handleSort}
          message={'Дата выхода'}
        />
        <EpisodeSpan
          sortedEpisodes={sortedEpisodes}
          prop={'byNumOfEp'}
          handleSort={handleSort}
          message={'Номер в сезоне'}
        />
        <EpisodeSpan
          sortedEpisodes={sortedEpisodes}
          prop={'byLenOfChar'}
          handleSort={handleSort}
          message={'Число персонажей'}
        />
      </div>
      <ul className='episodes_wrapper collection'>
        {episodes?.length ? (
          episodes?.map((episode) => (
            <li key={episode.id} className='row collection-item'>
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
