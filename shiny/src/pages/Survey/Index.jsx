import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { colors } from '../../utils/style/colors'
import styled from 'styled-components'


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


const Survey = () => {
  const { questionNumber } = useParams()
  const questionNumberInt = parseInt(questionNumber)
  const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
  const nextQuestionNumber = questionNumberInt + 1
  //Pour récupérer les données du fetch en vue de les afficher
  // surveyData va nous permettre de stocker l’objet qui a été retourné par l’API. 
  // À partir de là, on peut exploiter questions  assez simplement en appelant :
  // setSurveyData(surveyData).
  //Donc pour initialiser on met un objet dans le useState
  const [surveyData, setSurveyData] = useState({})
  useEffect(() => {
    // setDataLoading(true)
    fetch(`http://localhost:8000/survey`)
         .then((response) => response.json()
         .then(({ surveyData }) => {
         console.log("Réponse call API",surveyData) 
         setSurveyData(surveyData)
        //  setDataLoading(false)
        })
         .catch((error) => console.log(error))
     )
 }, [])
  return (
    <SurveyContainer>
      <QuestionTitle>Question {questionNumber}</QuestionTitle>
      <QuestionContent>{surveyData[questionNumber]}   </QuestionContent>
        <LinkWrapper>
        {/* Version1 */}
          {/* <NavLink to={`/survey/${prevQuestionNumber}`}>Précédent</NavLink>
          {questionNumberInt === 10 ? (
            <NavLink to="/results">Résultats</NavLink>
          ) : (
            <NavLink to={`/survey/${nextQuestionNumber}`}>Suivant</NavLink>
          )} */}
        {/* Version2 */}
            <NavLink to={`/survey/${prevQuestionNumber}`}>Précédent</NavLink>
            {surveyData[questionNumberInt + 1] ? (
                <NavLink to={`/survey/${nextQuestionNumber}`}>Suivant</NavLink>
            ) : (
                <NavLink to="/results">Résultats</NavLink>
            )}
        </LinkWrapper>
      </SurveyContainer>
  )
}
export default Survey
