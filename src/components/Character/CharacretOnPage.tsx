import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { fetchOneCharacter } from '../../lib/api'
import { ICharacter } from '../../types'

const CharacretOnPage = () => {
  const params = useParams()
  const [character, setCharacter] = useState<ICharacter>()

  const loadCharacter = async () => {
    const data = await fetchOneCharacter(`${params.id}`)
    setCharacter(data)
  }

  useEffect(() => {
    loadCharacter()
  }, [])

  return (
    <div>
      <span>Имя персонажа: {character?.name}</span>
      <br />
      <span>
        Последний раз видели:
        <Link to={`/location/${character?.location.url.split('/').at(-1)}`}>
          {character?.location.name}
        </Link>
      </span>
    </div>
  )
}

export default CharacretOnPage
