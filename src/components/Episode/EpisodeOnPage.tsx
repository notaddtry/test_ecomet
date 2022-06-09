import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { fetchOneEpisode, fetchOneCharacter } from '../../api'
import { ICharacter, IEpisode } from '../../types'

const EpisodeOnPage = () => {
  const [episode, setEpisode] = useState<IEpisode>()
  const [characters, setCharacters] = useState<ICharacter[]>([])
  const [isCharactersLoaded, setCharastersLoaded] = useState(false)
  const params = useParams()

  const loadEpisode = async () => {
    const data = await fetchOneEpisode(`${params.id}`)
    setEpisode(data)
  }

  const loadCharacters = async () => {
    if (episode) {
      const allResult: ICharacter[] = []
      for (const url of episode?.characters) {
        const data = await fetchOneCharacter(url.split('/').at(-1)!)
        allResult.push(data)
      }
      setCharastersLoaded(true)
      setCharacters(allResult)
    }
  }

  useEffect(() => {
    loadEpisode()
  }, [])

  useEffect(() => {
    setCharastersLoaded(false)
    loadCharacters()
  }, [episode])

  const charactersLoaded = () => {
    return characters.map((character) => (
      <span style={{ marginRight: '.5rem' }} key={character.id}>
        <Link to={`/character/${character.id}`}>{character.name}</Link>
      </span>
    ))
  }

  return (
    <div>
      <span>Название эпизода: {episode?.name}</span>
      <br />
      <span>Дата выхода эпизода: {episode?.air_date}</span>
      <br />
      <span>Номер серии в сезоне: {episode?.episode.slice(4, 6)}</span>
      <br />
      <span>
        Персонажи в эпизоде:
        {isCharactersLoaded ? charactersLoaded() : <span>Загрузка...</span>}
      </span>
      <br />
    </div>
  )
}

export default EpisodeOnPage
