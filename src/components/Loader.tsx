import React from 'react'

const Loader: React.FC = () => {
  return (
    <div className='progress deep-purple lighten-5'>
      <div className='indeterminate deep-purple darken-1'></div>
    </div>
  )
}

export default Loader
