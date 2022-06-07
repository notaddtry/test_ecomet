import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { fetchOneEpisode } from '../../api'
import { IEpisode } from '../../types'

const EpisodeOnPage = () => {
  const [episode, setEpisode] = useState<IEpisode>()
  const params = useParams()

  const loadEpisode = async () => {
    const data = await fetchOneEpisode(`${params.id}`)
    setEpisode(data)
  }

  useEffect(() => {
    loadEpisode()
  }, [])

  return (
    <div>
      <span>{episode?.name}</span>
      <br />
      <span>{episode?.air_date}</span>
      <br />
      <span>{episode?.episode}</span>
      <br />
      <span>{episode?.characters}</span>
      <br />
    </div>
  )
}

export default EpisodeOnPage
