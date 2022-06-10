import { IEpisode } from '../../types'

export function sortById(
  episodes: IEpisode[],
  toMax: boolean,
  propsToSort: 'byId' | 'byName' | 'byDate' | 'byNumOfEp' | 'byLenOfChar'
) {
  let props: 'id' | 'name' | 'air_date' | 'episode' | 'characters' = 'id'
  switch (propsToSort) {
    case 'byId':
      props = 'id'
      break
    case 'byName':
      props = 'name'
      break

    case 'byDate':
      props = 'air_date'
      break

    case 'byNumOfEp':
      props = 'episode'
      break

    case 'byLenOfChar':
      props = 'characters'
      break

    default:
      break
  }
  if (props !== 'characters') {
    toMax
      ? episodes.sort(function (firstEpisode, secondEpisode) {
          if (firstEpisode[props] > secondEpisode[props]) {
            return 1
          } else if (firstEpisode[props] < secondEpisode[props]) {
            return -1
          } else {
            return 0
          }
        })
      : episodes.sort(function (firstEpisode, secondEpisode) {
          if (firstEpisode[props] < secondEpisode[props]) {
            return 1
          } else if (firstEpisode[props] > secondEpisode[props]) {
            return -1
          } else {
            return 0
          }
        })
  } else {
    toMax
      ? episodes.sort(function (firstEpisode, secondEpisode) {
          if (
            firstEpisode.characters.length > secondEpisode.characters.length
          ) {
            return 1
          } else if (
            firstEpisode.characters.length < secondEpisode.characters.length
          ) {
            return -1
          } else {
            return 0
          }
        })
      : episodes.sort(function (firstEpisode, secondEpisode) {
          if (
            firstEpisode.characters.length < secondEpisode.characters.length
          ) {
            return 1
          } else if (
            firstEpisode.characters.length > secondEpisode.characters.length
          ) {
            return -1
          } else {
            return 0
          }
        })
  }
  return episodes
}
