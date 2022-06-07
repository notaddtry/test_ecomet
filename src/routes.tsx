import React from 'react'
import { Route, Routes } from 'react-router-dom'

import HomeLayout from './layout/HomeLayout'
import HomePage from './pages/HomePage'
import EpisodePage from './pages/EpisodePage'
import Undefined from './pages/Undefined'

const useRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomeLayout />}>
        <Route element={<HomePage />} index />
        <Route element={<EpisodePage />} path='/episode/:id' />
      </Route>
      <Route path='*' element={<Undefined />} />
    </Routes>
  )
}

export default useRoutes
