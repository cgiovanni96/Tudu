import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.color.background};
        color: ${({ theme }) => theme.color.text.primary};
    }

    h1 {
        font-family: 'Raleway', sans-serif;
        font-weight: 700;
        font-size: 20px
    }
`

export default GlobalStyles
