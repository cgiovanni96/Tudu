import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    body {
        width: 80%;
        margin: auto;
        background: ${({ theme }) => theme.color.background};
        color: ${({ theme }) => theme.color.text.primary};
        font-family: ${({ theme }) => theme.typo.detail.family};
    }
`

export default GlobalStyles
