//Rajout de ce composant pour customizer le routing (cf mon glossaire front end)
import { Outlet } from 'react-router-dom'
import Header from '../Header/Index'
import Footer from '../Footer/Index'

const Layout = () => {
  return (
    <>
      <Header />    
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
