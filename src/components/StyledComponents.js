import styled from "styled-components"

export const StyledTr = styled.tr`
    cursor:pointer
`
export const StyledHeading = styled.div`
    color: ${({ theme }) => theme.heading};
    text-align:center;
    margin:30px;
    font-weight:600;
`

export const StyledTh = styled.thead`
    background-color: ${({ theme }) => theme.bgTh};
`
