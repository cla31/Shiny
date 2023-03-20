import styled from 'styled-components'
import { colors } from '../../utils/style/colors'
import { useTheme } from '../../utils/hooks/Index'

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 60px;
`

const NightModeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${colors.secondary};
`

const Footer = () => {
  const { toggleTheme, theme } = useTheme()
  return (
    <FooterContainer onClick={() => toggleTheme()}>
      <NightModeButton>
        Changer de mode : {theme === 'light' ? '☀️' : '🌙'}
      </NightModeButton>
    </FooterContainer>
  )
}

export default Footer
