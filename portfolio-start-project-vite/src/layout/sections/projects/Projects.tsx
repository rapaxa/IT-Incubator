import {SectionsWrapper} from "../../../components/sectionItems/SectionWrapper.tsx";
import {SectionTitles} from "../../../components/sectionItems/SectionTitles.tsx";
import {SectionSpan} from "../../../components/sectionItems/SectionSpan.tsx";
import {FlexWrapperStyled} from "../../../components/FlexWrapper.tsx";
import {Icon} from "../../../components/icons/Icon.tsx";
import {Container} from "../../../components/menu/Container.tsx";
import {dataItems} from "./projectsData.ts";
import {
    Card,
    StyledDescription, StyledLink, StyledLinks,
    StyledListItem,
    StyledListItemImg,
    StyledListItems, StyledNote,
    StyledTitle
} from "./Projects.styled.tsx";


export const Projects = () => {
    return (
        <SectionsWrapper>
            <Container direction="column">
                <SectionTitles>Projects</SectionTitles>
                <SectionSpan>Things I’ve built so far</SectionSpan>
                <StyledListItems>
                    {dataItems.map((item, index) => (
                        <StyledListItem key={index}>
                            <StyledListItemImg src={item.img} alt=""/>
                            <Card>
                                <StyledTitle>{item.title}</StyledTitle>
                                <StyledDescription>{item.description}</StyledDescription>
                                <StyledNote>Tech stack : HTML , JavaScript, SASS, React</StyledNote>
                                <FlexWrapperStyled $alignI={"center"}>
                                    <StyledLinks>
                                        <Icon iconId={"gitSvg"} width={"20"} height={"20"} viewBox={"0 0 30 30"}/>
                                        <StyledLink>Live Preview</StyledLink>
                                    </StyledLinks>
                                    <StyledLinks>
                                        <Icon iconId={"gitSvg"} width={"20"} height={"20"} viewBox={"0 0 30 30"}/>
                                        <StyledLink>View Code</StyledLink>
                                    </StyledLinks>
                                </FlexWrapperStyled>
                            </Card>

                        </StyledListItem>
                    ))}
                </StyledListItems>
            </Container>

        </SectionsWrapper>
    );
};
