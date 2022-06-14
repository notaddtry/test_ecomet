import { useEffect } from 'react'
import { useLocation } from 'react-router'

interface IScrollToTop {
  children: React.ReactNode
}

const ScrollToTop: React.FC<IScrollToTop> = ({ children }) => {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return <>{children}</>
}

export default ScrollToTop
