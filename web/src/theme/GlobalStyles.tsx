import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    body {
        width: 100%;
        margin: auto;
        display: flex;
        flex-direction: column;
        background: ${({ theme }) => theme.palette.bg};
        color: ${({ theme }) => theme.palette.text.primary};
        font-family: ${({ theme }) => theme.typo.family};
    }
`

export default GlobalStyles
