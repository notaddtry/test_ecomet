export interface ISeason {
  episodes: IEpisode[]
}

export interface IEpisode {
  id: number
  name: string
  air_date: string
  episode: string
  characters: string[]
  url: string
  created: string
}

export interface ICharacter {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: object
  location: ICharacterLocation
  image: string
  episode: string[]
  url: string[]
  created: string
}

export interface ICharacterLocation {
  name: string
  url: string
}

export interface ILocation {
  id: number
  name: string
  type: string
  dimension: string
  residents: string[]
  url: string[]
  created: string
}

export type ISortedEpisodes =
  | 'byId'
  | 'byName'
  | 'byDate'
  | 'byNumOfEp'
  | 'byLenOfChar'
