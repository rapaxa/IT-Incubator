import styled from "styled-components";
type ContainerProps = {
    direction?: string;
    justify?: string;
}
export const Container = styled.div<ContainerProps>`
    max-width: 1240px;
    display: flex;
    flex-direction:${(props)=> props.direction || "row"};
    width: 100%;
    margin: 0 auto;
    justify-content: ${(props) =>props.justify || "space-between"};
    align-items: center;
`

