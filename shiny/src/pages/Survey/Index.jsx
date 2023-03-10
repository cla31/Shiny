import React from 'react'
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
// Coder un lien  précédent  et un lien  suivant  qui permettent respectivement
// de passer à la question précédente et à la question suivante.
// Si la question actuelle est à 1, le lien "précédent" n'est pas activé.
// Si la question est à 10, le lien "suivant" ne s'affiche pas.
// À la place, il y aura un lien "Résultats" qui redirigera vers la page "Results".
const Survey = () => {
  const { questionNumber } = useParams()
  const questionNumberInt = parseInt(questionNumber)
  const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
  const nextQuestionNumber = questionNumberInt + 1
  return (
    <div>
      <h1>Questionnaire 🧮</h1>
      <h2>Question {questionNumber}</h2>
      <NavLink to={`/survey/${prevQuestionNumber}`}>Précédent</NavLink>
      {questionNumberInt === 10 ? (
        <NavLink to="/results">Résultats</NavLink>
      ) : (
        <NavLink to={`/survey/${nextQuestionNumber}`}>Suivant</NavLink>
      )}
    </div>
  )
}
export default Survey
