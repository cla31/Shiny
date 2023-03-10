import React from 'react'
import { Link } from 'react-router-dom'
const PageError = () => {
  return (
    <>
      <div>ceci est une page erreur 🤦🏽‍♀️</div>
      <Link to="/" className="message">
        Retourner sur la page d'accueil
      </Link>
    </>
  )
}

export default PageError
