import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import useRoutes from './routes'

const App = () => {
  const routes = useRoutes()

  return (
    <div className='wrapper'>
      <Router basename='/test_ecomet'>
        <ScrollToTop>
          <>{routes}</>
        </ScrollToTop>
      </Router>
    </div>
  )
}

export default App
