import {Container} from "../../../App.tsx";
import {AboutMe} from "./infoAboutMe/AboutMe.tsx";
import {WorkExperience} from "./infoAboutMe/WorkExperience.tsx";
import {Education} from "./infoAboutMe/Education.tsx";
import {FlexWrapperStyled} from "../../../components/FlexWrapper.tsx";

export const InfoAboutMe = () => {
    return (
        <Container direction={"row"} >
           <FlexWrapperStyled $flexD={"column"}>
            <AboutMe/>
            <WorkExperience/>
            <Education/>
           </FlexWrapperStyled>
           <Container >
               das
           </Container>
        </Container>
    )
}
