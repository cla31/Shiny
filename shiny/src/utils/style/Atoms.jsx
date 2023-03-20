import { NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import {colors} from './colors'
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Loader = styled.div`
  padding: 10px;
  border: 6px solid ${colors.primary};
  border-bottom-color: transparent;
  border-radius: 22px;
  animation: ${rotate} 1s infinite linear;
  height: 0;
  width: 0;
`
// Le StyledNavLink définit un lien stylisé avec des couleurs,
// des tailles de police et des remplissages personnalisés,
// et si la prop $isFullLink est vraie, il ajoute des styles
// supplémentaires pour transformer le lien en un bouton arrondi avec une couleur de fond violette.
export const StyledNavLink = styled(NavLink)`
padding: 10px 15px;
color: #8186a0;
text-decoration: none;
font-size: 18px;
text-align: center;
${(props) =>
  props.$isFullLink &&
  `color: white; 
  border-radius: 30px; 
  background-color: ${colors.primary};`}
`
