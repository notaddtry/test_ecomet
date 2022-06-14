import React, { useEffect, useState } from 'react'
import { useStore } from 'effector-react'

import { IEpisode, ISortedEpisodes } from '../../types'
import { sortById } from '../../lib/helpers'
import { getEpisodesFx } from '../../store'

import EpisodeItem from './EpisodeItem'
import EpisodeSpan from './EpisodeSpan'
import Loader from '../Loader'

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
  const isLoading = useStore(getEpisodesFx.pending)
  const [isReady, setReady] = useState(false)

  const handleSort = (propsToSort: ISortedEpisodes) => {
    setSortedEpisodes((prev) => ({
      ...prev,
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
    if (!isReady) setReady(true)
    // eslint-disable-next-line
  }, [episodesProps])

  if (isLoading || !isReady) {
    return <Loader />
  }

  return (
    <>
      <div className='row flex_center'>
        <EpisodeSpan
          prop={'byId'}
          handleSort={handleSort}
          message={'Id эпизода'}
        />
        <EpisodeSpan
          prop={'byName'}
          handleSort={handleSort}
          message={'Название'}
        />
        <EpisodeSpan
          prop={'byDate'}
          handleSort={handleSort}
          message={'Дата выхода'}
        />
        <EpisodeSpan
          prop={'byNumOfEp'}
          handleSort={handleSort}
          message={'Номер в сезоне'}
        />
        <EpisodeSpan
          prop={'byLenOfChar'}
          handleSort={handleSort}
          message={'Число персонажей'}
        />
      </div>

      {!episodes?.length ? (
        <span>Серий не найдено</span>
      ) : (
        <ul className='episodes_wrapper collection'>
          {episodes?.map((episode) => (
            <li key={episode.id} className='row collection-item'>
              <EpisodeItem {...episode} />
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default EpisodeList
