import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Header: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const clickHandler = () => {
    navigate(-1)
  }

  return (
    <nav className='deep-purple darken-1'>
      <div className='nav-wrapper row valign-wrapper'>
        {location.pathname !== '/' ? (
          <button
            className='waves-effect waves-light btn deep-purple darken-1 col s1 block_center flex_center'
            onClick={clickHandler}>
            <i className='material-icons'>arrow_back</i>
          </button>
        ) : (
          <>
            <div className='col s1 block_center'></div>
          </>
        )}

        <Link
          to='/'
          className='waves-effect waves-light btn deep-purple darken-1 col s1 block_center flex_center'>
          <i className='material-icons cursor'>home</i>
        </Link>
      </div>
    </nav>
  )
}

export default Header
