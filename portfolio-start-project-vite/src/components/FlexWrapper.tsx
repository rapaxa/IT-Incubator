import styled from "styled-components";
type FlexWrapperPropsType = {
    $alignI?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around";
    $justifyC?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around";
    $flexD?: "column" | "row";

}

export const FlexWrapperStyled = styled.div<FlexWrapperPropsType>`
    display: flex;
    justify-content: ${({ $justifyC }) => $justifyC};
    flex-direction: ${({ $flexD }) => $flexD};
    align-items: ${({ $alignI }) => $alignI};
`;
