//Rajout de ce composant pour customizer le routing (cf mon glossaire front end)
import { Outlet } from 'react-router-dom'
import Header from '../Header/Index'

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default Layout
