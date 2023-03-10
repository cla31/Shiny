import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {colors} from '../../utils/style/colors'

const ErrorWrapper = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.background};
  align-items: center;
`

const ErrorTitle = styled.h1`
  font-weight: 300;
`

const ErrorSubtitle = styled.h2`
  font-weight: 300;
  color: ${colors.secondary};
`



const PageError = () => {
  // return (
  //   <>
  //     <div>ceci est une page erreur 🤦🏽‍♀️</div>
  //     <Link to="/" className="message">
  //       Retourner sur la page d'accueil
  //     </Link>
  //   </>
  // )
  return(
  <ErrorWrapper>
    <ErrorTitle>Oups...</ErrorTitle>
    <div>ceci est une page erreur 🤦🏽‍♀️</div>
    <ErrorSubtitle>
      Il semblerait que la page que vous cherchez n’existe pas
    </ErrorSubtitle>
    <Link to="/" className="message">
      Retourner sur la page d'accueil
    </Link>
  </ErrorWrapper>)
  
}

export default PageError
