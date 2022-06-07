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
    <div>
      <Link to={`/episode/${id}`}>
        <span>{id}</span>
        <br />
        <span>{name}</span>
        <br />
        <span>{date}</span>
        <br />
        <span>{episode}</span>
        <br />
        <span>{characters}</span>
        <br />
      </Link>
    </div>
  )
}

export default EpisodeItem
