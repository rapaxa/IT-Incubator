import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import styled from "styled-components";
import {AboutMe} from "./layout/sections/aboutMe/AboutMe.tsx";

function App() {
    return (
        <Container>
            <Header/>
            <Main/>
            <AboutMe/>
        </Container>
    )
}

export default App

export const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
`

