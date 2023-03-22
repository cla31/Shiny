import Footer from '.'
import { ThemeProvider } from '../../utils/context'
import { render, screen, fireEvent } from '@testing-library/react'

//Pour s'assurer que Footer render bien dans le DOM,
//mais pour que ça fonctionne, s'assurer que Footer est wrappé dans ThemeProvider
//puisque c'est grâce à lui qu'on peut mettre un fond noir ou clair.
describe('Footer', () => {
  test('Should render without crash', async () => {
    render(
      <ThemeProvider>
        <Footer />
      </ThemeProvider>
    )
    //screen  est en quelque sorte le body  qui contient notre composant,
    //à partir duquel on va pouvoir utiliser nos sélecteurs.
    const nightModeButton = screen.getByRole('button')
    // Ici, nous avons utilisé le sélecteur getByRole.
    // Ce sélecteur peut dans beaucoup de cas vous permettre
    // d'accéder à votre élément, d'autant que vous pouvez lui
    // passer un paramètre pour cibler encore plus précisément un élément.
    // Mais dans le cas où vous ne pouvez pas l'utiliser,
    // et où aucun autre sélecteur ne vous permet de cibler votre élément,
    // vous pouvez tout à fait passer data-testid  à votre composant
    // et ensuite y accéder avec le sélecteur getByTestId.
    // Je vous laisse regarder la documentation de React Testing Library par vous-même (en anglais).
    expect(nightModeButton.textContent).toBe('Changer de mode : ☀️')
    //Pour interagir avec notre composant,
    //on a besoin de fireEvent  qui va nous permettre
    //de déclencher des événements du DOM, ici click  . On fait donc :
    fireEvent.click(nightModeButton)
    expect(nightModeButton.textContent).toBe('Changer de mode : 🌙')
  })
})
