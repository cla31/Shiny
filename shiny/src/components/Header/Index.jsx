import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../utils/style/colors'
import { StyledNavLink } from '../../utils/style/Atoms'
import DarkLogo from '../../assets/dark-logo.png'


const HomeLogo = styled.img`
  height: 70px;
`

const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`


const Header = () => {
  return (
    <NavContainer>
      <NavLink to="/">
        <HomeLogo src={DarkLogo} />
      </NavLink>
      <div>
        <StyledNavLink to="/">Accueil</StyledNavLink>
        {/* Pour passer des props dans le CSS::::::: */}
        {/* si la prop $isFullLink est vraie, il ajoute des styles supplémentaires 
        pour transformer le lien en un bouton arrondi avec une couleur de fond violette. */}
        <StyledNavLink to="/survey/1" $isFullLink>
          Faire le test
        </StyledNavLink>
        <StyledNavLink to="/freelances">Profils</StyledNavLink>
      </div>
    </NavContainer>
  )
}

export default Header
