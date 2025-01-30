import {WorkExperience} from "./infoAboutMeItems/WorkExperience.tsx";
import {Education} from "./infoAboutMeItems/Education.tsx";
import {FlexWrapperStyled} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../components/Container.tsx";
import {SectionTitles} from "../../../components/SectionTitles.tsx";
import {SectionText} from "../../../components/SectionText.tsx";

export const InfoAboutMe = () => {
    return (
        <Container direction={"row"} >
           <FlexWrapperStyled $flexD={"column"}>
               <SectionTitles>{"About Me"}</SectionTitles>
               <SectionText>{"The Generator App is an online tool that helps you " +
                   "to export ready-made templates ready to work as your future website" +
                   ". It helps you to combine slides, panels and other components " +
                   "and export it as a set of static files: HTML/CSS/JS."}</SectionText>
            <WorkExperience/>
            <Education/>
           </FlexWrapperStyled>
           <Container >
               das
           </Container>
        </Container>
    )
}
