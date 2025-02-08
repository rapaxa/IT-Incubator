import styled from "styled-components";
import {ContainerPropsType} from "../../types/container.ts";


export const SectionsWrapper = styled.section<ContainerPropsType>`
    min-height: ${(props) => props.height || "100vh"};
    display: flex;
    width: 100%;
    flex-direction: ${(props) => props.direction || 'column'};
    justify-content: ${(props) => props.$justify || 'center'
    };
    flex-wrap: ${(props) => props.wrap || "no-wrap"};
    align-items: ${(props) => props.$alightItems};
    
`
