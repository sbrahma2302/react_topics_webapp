import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`
    body {
        transition: all 1.0s ease;
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.font};
        font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif; 
    }
`
