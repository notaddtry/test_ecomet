import React from 'react'
import { Link } from 'react-router-dom'

// id, название, дата выхода и порядковый номер эпизода в сезоне, число персонажей
// спользование REST API для получения данных с сервера

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
      <Link to={`/episode/${id}`}>
        <span>Id эпизода: {id}</span>
      </Link>

      <br />
      <span>Название эпизода: {name}</span>
      <br />
      <span>Дата выхода эпизода: {date}</span>
      <br />
      <span>Номер серии в сезоне: {episode.slice(4, 6)}</span>
      <br />
      <span>Число персонажей: {characters.length}</span>
      <br />
    </div>
  )
}

export default EpisodeItem
