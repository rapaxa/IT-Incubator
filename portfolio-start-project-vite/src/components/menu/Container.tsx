import styled from "styled-components";
import {theme} from "../../styles/theme.ts";
type ContainerProps = {
    direction?: string;
    justify?: string;
}
export const Container = styled.div<ContainerProps>`
    max-width: 1192px;
    display: flex;
    flex-direction:${(props)=> props.direction || "row"};
    width: 100%;
    margin: 0 auto;
    justify-content: ${(props) =>props.justify || "space-between"};
    align-items: center;
    @media ${theme.media.tablet} {
        flex-direction: column;

    }
`

