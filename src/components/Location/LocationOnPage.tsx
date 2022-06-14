import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

import { fetchOneCharacter, fetchOneLocation } from '../../lib/api'
import { ICharacter, ILocation } from '../../types'

import Loader from '../Loader'

const LocationOnPage: React.FC = () => {
  const params = useParams()
  const [location, setLocation] = useState<ILocation>()
  const [characters, setCharacters] = useState<ICharacter[]>([])
  const [isCharactersLoaded, setCharastersLoaded] = useState(false)

  const loadLocaion = async () => {
    const data = await fetchOneLocation(`${params.id}`)
    setLocation(data)
  }

  const loadCharacters = async () => {
    if (location) {
      const allResult: ICharacter[] = []
      for (const url of location?.residents) {
        const data = await fetchOneCharacter(url.split('/').at(-1)!)
        allResult.push(data)
      }
      setCharastersLoaded(true)
      setCharacters(allResult)
    }
  }

  useEffect(() => {
    loadLocaion()
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    setCharastersLoaded(false)
    loadCharacters()
    // eslint-disable-next-line
  }, [location])

  const charactersLoaded = () => {
    return characters.map((character) => (
      <span style={{ marginLeft: '.5rem' }} key={character.id}>
        <Link to={`/character/${character.id}`}>{character.name}</Link>,
      </span>
    ))
  }

  return (
    <div>
      <div>
        <span>Локация: {location?.name}</span>
        <br />
        <span>Тип локации: {location?.type}</span>
        <br />
        <span>Измерение: {location?.dimension}</span>
        <br />
        <span>
          Персонажи на локации:
          {isCharactersLoaded ? charactersLoaded() : <Loader />}
        </span>
      </div>
    </div>
  )
}

export default LocationOnPage
