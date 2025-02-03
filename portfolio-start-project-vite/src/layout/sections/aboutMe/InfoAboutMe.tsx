import {WorkExperience} from "./infoAboutMeItems/WorkExperience.tsx";
import {Education} from "./infoAboutMeItems/Education.tsx";
import {FlexWrapperStyled} from "../../../components/FlexWrapper.tsx";
import {SectionsWrapper} from "../../../components/SectionWrapper.tsx";
import {SectionTitles} from "../../../components/SectionTitles.tsx";
import {SectionText} from "../../../components/SectionText.tsx";
import {Container} from "../../../components/menu/Container.tsx";

export const InfoAboutMe = () => {
    return (
        <SectionsWrapper direction={"row"} $alightItems={"center"} $justify={"space-between"}>
            <Container>
                <FlexWrapperStyled $flexD={"column"} $justifyC={"space-between"}>
                    <SectionTitles >{"About Me"}</SectionTitles>
                    <SectionText>{"The Generator App is an online tool that helps you " +
                        "to export ready-made templates ready to work as your future website" +
                        ". It helps you to combine slides, panels and other components " +
                        "and export it as a set of static files: HTML/CSS/JS."}</SectionText>
                    <WorkExperience/>
                    <Education/>
                </FlexWrapperStyled>
            </Container>

        </SectionsWrapper>
    )
}
