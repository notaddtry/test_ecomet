import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { fetchOneLocation } from '../../lib/api'
import { ILocation } from '../../types'

const LocationOnPage = () => {
  const params = useParams()
  const [location, setLocation] = useState<ILocation>()

  const loadLocaion = async () => {
    const data = await fetchOneLocation(`${params.id}`)
    setLocation(data)
  }

  useEffect(() => {
    loadLocaion()
  }, [])

  return <div>{location?.name}</div>
}

export default LocationOnPage
