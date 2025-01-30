import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {InfoAboutMe} from "./layout/sections/aboutMe/InfoAboutMe.tsx";
import {TechStack} from "./layout/sections/techStack/TechStack.tsx";
import {FlexWrapperStyled} from "./components/FlexWrapper.tsx";
import {Projects} from "./layout/sections/projects/Projects.tsx";
import {Footer} from "./layout/footer/Footer.tsx";

function App() {
    return (
        <FlexWrapperStyled $flexD={"column"} $justifyC="center">
            <Header/>
            <Main/>
            <InfoAboutMe/>
            <TechStack/>
            <Projects/>
            <Footer/>
        </FlexWrapperStyled>
    )
}

export default App



