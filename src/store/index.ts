import { createStore, createEffect } from 'effector'
import { fetchEpisodes } from '../lib/api'
import { IEpisode } from '../types'

export const getEpisodesFx = createEffect(async () => {
  let AllResult = await fetchEpisodes()
  let resultAll: any[] = []
  AllResult.forEach((result) => {
    resultAll.push(result.results)
  })
  resultAll = resultAll.flat()

  return resultAll
})

export const $episodes = createStore<IEpisode[]>([]).on(
  getEpisodesFx.doneData,
  (state, episodes) => (state = episodes)
)
