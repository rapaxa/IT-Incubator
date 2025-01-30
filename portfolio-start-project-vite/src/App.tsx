import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import styled from "styled-components";
import {InfoAboutMe} from "./layout/sections/aboutMe/InfoAboutMe.tsx";
import {TechStack} from "./layout/sections/techStack/TechStack.tsx";
type ContainerPropsType = {
    direction?: string;
    height?:string;
    wrap?:string;
    $justify?:string;
}
function App() {
    return (
        <Container >
            <Header/>
            <Main/>
            <InfoAboutMe/>
            <TechStack/>
        </Container>
    )
}

export default App

export const Container = styled.section<ContainerPropsType>`
    min-height:${(props) =>props.height || "100vh"};
    display: flex;
    width: 100%;
    flex-direction: ${(props) => props.direction || 'column'};
    justify-content: ${(props) => props.$justify || 'center'
};
    flex-wrap: ${(props) => props.wrap || "no-wrap"};
`

