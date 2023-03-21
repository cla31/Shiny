import Footer from '.'
import { ThemeProvider } from '../../utils/context'
import { render } from '@testing-library/react'

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
  })
})
