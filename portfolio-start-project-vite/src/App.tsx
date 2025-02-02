import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {InfoAboutMe} from "./layout/sections/aboutMe/InfoAboutMe.tsx";
import {TechStack} from "./layout/sections/techStack/TechStack.tsx";
import {Projects} from "./layout/sections/projects/Projects.tsx";
import {Footer} from "./layout/footer/Footer.tsx";

function App() {
    return (
        <>
            <Header/>
            <Main/>
            <InfoAboutMe/>
            <TechStack/>
            <Projects/>
            <Footer/>
        </>

    )
}

export default App



