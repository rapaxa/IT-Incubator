import styled from "styled-components";

export const StyledSpan = styled.span`
    background: ${({theme}) => theme.gradient.nameGradient};
    -webkit-background-clip: text;
    color: transparent;
`
