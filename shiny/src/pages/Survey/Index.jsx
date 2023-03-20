// import React from 'react'
// import { useState, useEffect, useContext } from 'react'
// import { useParams } from 'react-router-dom'
// import { NavLink } from 'react-router-dom'
// import { colors } from '../../utils/style/colors'
// import styled from 'styled-components'
// import { Loader } from '../../utils/style/Atoms'
// import { SurveyContext } from '../../utils/context/Index'
// //On importe notre hook
// import { useFetch } from '../../utils/hooks/Index'

// const SurveyContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `

// const QuestionTitle = styled.h2`
//   text-decoration: underline;
//   text-decoration-color: ${colors.primary};
// `

// const QuestionContent = styled.span`
//   margin: 30px;
// `

// const LinkWrapper = styled.div`
//   padding-top: 30px;
//   & a {
//     color: black;
//   }
//   & a:first-of-type {
//     margin-right: 20px;
//   }
// `

// const ReplyBox = styled.button`
//   border: none;
//   height: 100px;
//   width: 300px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: ${colors.backgroundLight};
//   border-radius: 30px;
//   cursor: pointer;
//   box-shadow: ${(props) =>
//     props.isSelected ? `0px 0px 0px 2px ${colors.primary} inset` : 'none'};
//   &:first-child {
//     margin-right: 15px;
//   }
//   &:last-of-type {
//     margin-left: 15px;
//   }
// `

// const ReplyWrapper = styled.div`
//   display: flex;
//   flex-direction: row;
// `

// const Survey = () => {
//   const { questionNumber } = useParams()
//   const questionNumberInt = parseInt(questionNumber)
//   const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
//   const nextQuestionNumber = questionNumberInt + 1
//   // const [surveyData, setSurveyData] = useState({})
//   const [isDataLoading, setDataLoading] = useState(false)
//   const { answers, saveAnswers } = useContext(SurveyContext)
//   const [error, setError] = useState(null)
//   //Récupération de la data
//   const { data, isLoading } = useFetch(`http://localhost:8000/survey`)
//   const { surveyData } = data

//   function saveReply(answer) {
//     saveAnswers({ [questionNumber]: answer })
//   }
//   //Syntaxe await:
//   useEffect(() => {
//     //UseEffect ne peut pas prendre en paramètre une fonction asyncrone donc on les fait à part..

//     async function fetchSurvey() {
//       setDataLoading(true)
//       try {
//         const response = await fetch(`http://localhost:8000/survey`)
//         const { surveyData } = await response.json()
//         console.log('surveyData avec destructuring', surveyData)
//         setSurveyData(surveyData)
//       } catch (err) {
//         console.log('erreur', err)
//         setError(true)
//       } finally {
//         setDataLoading(false)
//       }
//     }
//     fetchSurvey()
//   }, [])

//   if (error) {
//     return <span>Oups il y a eu un problème</span>
//   }
//   return (
//     <SurveyContainer>
//       <QuestionTitle>Question {questionNumber}</QuestionTitle>
//       {isDataLoading ? (
//         <Loader />
//       ) : (
//         <QuestionContent>{surveyData[questionNumber]}</QuestionContent>
//       )}
//       <ReplyWrapper>
//         <ReplyBox
//           onClick={() => saveReply(true)}
//           isSelected={answers[questionNumber] === true}
//         >
//           Oui
//         </ReplyBox>
//         <ReplyBox
//           onClick={() => saveReply(false)}
//           isSelected={answers[questionNumber] === false}
//         >
//           Non
//         </ReplyBox>
//       </ReplyWrapper>
//       <LinkWrapper>
//         <NavLink to={`/survey/${prevQuestionNumber}`}>Précédent</NavLink>
//         {surveyData[questionNumberInt + 1] ? (
//           <NavLink to={`/survey/${nextQuestionNumber}`}>Suivant</NavLink>
//         ) : (
//           <NavLink to="/results">Résultats</NavLink>
//         )}
//       </LinkWrapper>
//     </SurveyContainer>
//   )
// }
// export default Survey

import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../utils/style/colors'
import { Loader } from '../../utils/style/Atoms'
import { SurveyContext } from '../../utils/context/Index'
//On importe notre hook
import { useFetch } from '../../utils/hooks/Index'

const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const QuestionTitle = styled.h2`
  text-decoration: underline;
  text-decoration-color: ${colors.primary};
`

const QuestionContent = styled.span`
  margin: 30px;
`

const LinkWrapper = styled.div`
  padding-top: 30px;
  & a {
    color: black;
  }
  & a:first-of-type {
    margin-right: 20px;
  }
`

const ReplyBox = styled.button`
  border: none;
  height: 100px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.isSelected ? `0px 0px 0px 2px ${colors.primary} inset` : 'none'};
  &:first-child {
    margin-right: 15px;
  }
  &:last-of-type {
    margin-left: 15px;
  }
`

const ReplyWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

function Survey() {
  const { questionNumber } = useParams()
  const questionNumberInt = parseInt(questionNumber)
  const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
  const nextQuestionNumber = questionNumberInt + 1

  const { saveAnswers, answers } = useContext(SurveyContext)

  function saveReply(answer) {
    saveAnswers({ [questionNumber]: answer })
  }
  //Récupération de la data avec notre hook:
  //Ce qui était surveyData avant devient data là
  const { data, isLoading, error } = useFetch(`http://localhost:8000/survey`)
  // A l’initialisation, data  est un objet vide... Ce qui veut dire qu'avec :
  const { surveyData } = data //surveyData est undefined
  // javaScript provoque donc une erreur pour data[questionNumber].
  // Une des manières d’éviter l’erreur est donc de vérifier que
  // surveyData  est défini avant de l'utiliser dans le composant (cf composant QuestionContent ci-dessous:
  //   <QuestionContent>
  //   {surveyData && surveyData[questionNumber]}
  // </QuestionContent>
  //   )

  if (error) {
    return <span>Il y a un problème</span>
  }

  return (
    <SurveyContainer>
      <QuestionTitle>Question {questionNumber}</QuestionTitle>
      {isLoading ? (
        <Loader />
      ) : (
        <QuestionContent>
          {surveyData && surveyData[questionNumber]}
        </QuestionContent>
      )}
      <ReplyWrapper>
        <ReplyBox
          onClick={() => saveReply(true)}
          isSelected={answers[questionNumber] === true}
        >
          Oui
        </ReplyBox>
        <ReplyBox
          onClick={() => saveReply(false)}
          isSelected={answers[questionNumber] === false}
        >
          Non
        </ReplyBox>
      </ReplyWrapper>
      <LinkWrapper>
        <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
        {surveyData && surveyData[questionNumberInt + 1] ? (
          <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
        ) : (
          <Link to="/results">Résultats</Link>
        )}
      </LinkWrapper>
    </SurveyContainer>
  )
}

export default Survey
