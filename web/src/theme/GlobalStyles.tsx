import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.color.background};
        color: ${({ theme }) => theme.color.text.primary};
    }
`

export default GlobalStyles
