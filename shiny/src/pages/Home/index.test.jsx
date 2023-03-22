import { sum } from '.'
import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import Home from '.'
import { ThemeProvider } from '../../utils/context'

test('Ma fonction sum', () => {
  const result = sum(3, 7)
  expect(result).toBe(10)
})
//Pour vérifier si le render du composant fonctionne
// describe('The Home component', () => {
//   it('should render without crash', () => {
//     render(
//       <MemoryRouter>
//         <ThemeProvider>
//           <Home />
//         </ThemeProvider>
//       </MemoryRouter>
//     )
//   })
// })

describe('The Home component', () => {
  it('should render title', () => {
    render(
      <MemoryRouter>
        <ThemeProvider>
          <Home />
        </ThemeProvider>
      </MemoryRouter>
    )
    //permet de voir ce qui est rendu dans le composant::::
    // screen.debug()
    // expect(
    //   screen.getByText(
    //     'Repérez vos besoins, on s’occupe du reste, avec les meilleurs talents'
    //   )
    // ).toBeTruthy() //Pour être sûr que screen.getByText renvoie bien l'élément qui ici correspond au titre.
    //Et là on affiche le rôle mais aussi le texte affiché
    //Level 2 car c'est un titre H2
    expect(
      screen.getByRole('heading', {
        //On peut tenter de casser le test en faisant level 3
        level: 2,
        text: 'Repérez vos besoins, on s’occupe du reste, avec les meilleurs talents',
      })
    ).toBeTruthy()
  })
})
