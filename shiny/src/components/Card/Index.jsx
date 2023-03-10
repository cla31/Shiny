import PropTypes from 'prop-types'
import DefaultPicture from '../../assets/profile.png'
import styled from 'styled-components'
import { colors } from '../../utils/style/colors'

// const CardLabel = styled.span`
//   color: #5843e4;
//   font-size: 22px;
//   font-weight: bold;
// `
// const CardImage = styled.img`
//   height: 80px;
//   width: 80px;
//   border-radius: 50%;
// `
// const CardWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding: 15px;
//   background-color: ${colors.backgroundLight};
//   border-radius: 30px;
//   width: 350px;
//   transition: 200ms;
//   &:hover {
//     cursor: pointer;
//     box-shadow: 2px 2px 10px #e2e3e9;
//   }
// `
const CardLabel = styled.span`
  color: #5843e4;
  font-size: 22px;
  font-weight: normal;
  padding-left: 15px;
`

const CardTitle = styled.span`
  color: black;
  font-size: 22px;
  font-weight: normal;
  align-self: center;
`

const CardImage = styled.img`
  height: 150px;
  width: 150px;
  align-self: center;
  border-radius: 50%;
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 15px;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  width: 300px;
  height: 300px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`
// const Card = ({ label, title = 'Mon titre par défaut', picture }) => {
//   return (
//     <CardWrapper>
//       {/* Utilisation du styled componant CarLabel, pour cela, on enlève le span ci-dessous: */}
//       {/* <span>{label}</span> */}
//       <CardLabel>{label}</CardLabel> {/* Et on le remplace par CardLabel: */}
//       {/* <img src={picture} alt="freelance" height={80} width={80} /> */}
//       <CardImage src={picture} alt="freelance" />
//       <span>{title}</span>
//     </CardWrapper>
//   )
// }
const Card=({ label, title, picture })=> {
  return (
    <CardWrapper>
      <CardLabel>{label}</CardLabel>
      <CardImage src={picture} alt="freelance" />
      <CardTitle>{title}</CardTitle>
    </CardWrapper>
  )
}
// Pour sécuriser les props de  Card  avec les propTypes
Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}

Card.defaultProps = {
  label: '',
  title: '',
  picture: DefaultPicture,
}
export default Card
