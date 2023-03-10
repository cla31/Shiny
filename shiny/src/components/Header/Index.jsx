import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../utils/style/colors'
// Le StyledNavLink définit un lien stylisé avec des couleurs,
// des tailles de police et des remplissages personnalisés,
// et si la prop $isFullLink est vraie, il ajoute des styles
// supplémentaires pour transformer le lien en un bouton arrondi avec une couleur de fond violette.

//***********Ancienne version:::: */
// const StyledNavLink = styled(NavLink)`
//   padding: 15px;
//   color: #8186a0;
//   text-decoration: none;
//   font-size: 18px;
// `

//***********Nouvelle version:::: */
const StyledNavLink = styled(NavLink)`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`
const Header = () => {
  return (
    <header>
      <nav>
        <StyledNavLink to="/">Accueil</StyledNavLink>
        {/* <StyledNavLink to="/survey/42">Questionnaire</StyledNavLink> */}
        {/* MAJ pour passer des props dans le CSS::::::: */}
        {/* si la prop $isFullLink est vraie, il ajoute des styles supplémentaires 
        pour transformer le lien en un bouton arrondi avec une couleur de fond violette. */}
        <StyledNavLink to="/survey/1" $isFullLink>
          Faire le test
        </StyledNavLink>
        <StyledNavLink to="/freelances">Profils</StyledNavLink>
      </nav>
    </header>
  )
}

export default Header
