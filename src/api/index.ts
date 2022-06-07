export const fetchEpisodes = async () => {
  let result: any[] = []
  const urls = [
    'https://rickandmortyapi.com/api/episode',
    'https://rickandmortyapi.com/api/episode?page=2',
    'https://rickandmortyapi.com/api/episode?page=3',
  ]
  const requests = urls.map((url) => fetch(url))

  await Promise.all(requests)
    .then((responses) =>
      Promise.all(responses.map((response) => response.json()))
    )
    .then((episodes) =>
      episodes.forEach((episode) => (result = [...result, episode]))
    )

  return result
}

export const fetchOneEpisode = async (id: string) => {
  const response = await fetch(`https://rickandmortyapi.com/api/episode/${id}`)
  const data = response.json()

  return data
}
