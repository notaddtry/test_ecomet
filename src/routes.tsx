import React from 'react'
import { Route, Routes } from 'react-router-dom'

import HomeLayout from './layout/HomeLayout'
import HomePage from './pages/HomePage'
import EpisodePage from './pages/EpisodePage'
import Undefined from './pages/Undefined'
import CharacterPage from './pages/CharacterPage'
import CharacterLocationPage from './pages/CharacterLocationPage'

const useRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomeLayout />}>
        <Route element={<HomePage />} index />
        <Route element={<EpisodePage />} path='/episode/:id' />
        <Route element={<CharacterPage />} path='/character/:id' />
        <Route element={<CharacterLocationPage />} path='/location/:id' />
      </Route>
      <Route path='*' element={<Undefined />} />
    </Routes>
  )
}

export default useRoutes
