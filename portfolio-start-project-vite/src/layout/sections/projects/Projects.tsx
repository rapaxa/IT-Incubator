import {SectionsWrapper} from "../../../components/SectionWrapper.tsx";
import {SectionTitles} from "../../../components/SectionTitles.tsx";
import {SectionSpan} from "../../../components/SectionSpan.tsx";
import styled from "styled-components";
import imgOne from "../../../assets/images/Rectangle-1.webp";
import imgTwo from "../../../assets/images/Rectangle-6.webp";
import imgThree from "../../../assets/images/Rectangle-8.webp";
import imgFour from "../../../assets/images/Rectangle-12.webp";
import imgFive from "../../../assets/images/Rectangle-13.webp";
import imgSix from "../../../assets/images/Rectangle-14.webp";
import {FlexWrapperStyled} from "../../../components/FlexWrapper.tsx";
import {Icon} from "../../../components/icons/Icon.tsx";
import {Container} from "../../../components/menu/Container.tsx";
import {theme} from "../../../styles/theme.ts";


type projectsDataItemsType = {
    img: string,
    title: string,
    description: string,
    note: string,
}
const dataItems: projectsDataItemsType[] = [
    {
        img: imgOne,
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description " +
            "This is sample project lorem ipsum generator for dummy content",
        note: "Tech stack : HTML , JavaScript, SASS, React",
    },
    {
        img: imgTwo,
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description " +
            "This is sample project lorem ipsum generator for dummy content",
        note: "Tech stack : HTML , JavaScript, SASS, React",
    }, {
        img: imgThree,
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description " +
            "This is sample project lorem ipsum generator for dummy content",
        note: "Tech stack : HTML , JavaScript, SASS, React",
    }, {
        img: imgFour,
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description " +
            "This is sample project lorem ipsum generator for dummy content",
        note: "Tech stack : HTML , JavaScript, SASS, React",
    }, {
        img: imgFive,
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description " +
            "This is sample projdjfdkjnfdfdlkdlkfgdslggdhlsldskgGLLKHGDslhkldkggkhldsshklGDKLGHDS" +
            "ect lorem ipsum generator for dummy content",
        note: "Tech stack : HTML , JavaScript, SASS, React",
    }, {
        img: imgSix,
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description " +
            "This is sample project lorem ipsum generator for dummy content",
        note: "Tech stack : HTML , JavaScript, SASS, React",
    }
];


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
const Card = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 23.4375rem; // 375px -> 23.4375rem
    max-height: 35.625rem; // 570px -> 35.625rem
    margin: 1.25rem; // 20px -> 1.25rem
    overflow: hidden;
    text-overflow: ellipsis;
`;

const StyledListItems = styled.ul`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    margin-top: 20vh;
    @media ${theme.media.tablet} {
        display: flex;
        justify-content: space-around;

    }
`;

const StyledListItemImg = styled.img`
    width: 100%;
    min-height: 16.25rem; // 260px -> 16.25rem
    border-radius: 1.25rem 1.25rem 0 0; // 20px -> 1.25rem
`;

const StyledListItem = styled.li`
    max-width: 23.4375rem; // 375px -> 23.4375rem
    min-height: 35.625rem; // 570px -> 35.625rem
    background-color: #FFFFFF;
    margin-bottom: 3.875rem; // 62px -> 3.875rem
    border-radius: 1.25rem; // 20px -> 1.25rem
    position: relative;

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        box-shadow: 1.25rem 1.25rem 1.25rem 0.625rem rgba(0, 0, 0, 0.2); // 20px 20px 20px 10px -> 1.25rem 1.25rem 1.25rem 0.625rem
        filter: blur(1.25rem); // 20px -> 1.25rem
        z-index: -1;
        border-radius: 1.25rem; // 20px -> 1.25rem
        @media ${theme.media.tablet} {
        display: none
    }
        
    }
`;

const StyledTitle = styled.h3`
    font-size: 1.75rem; // 28px -> 1.75rem
    font-weight: 500;
`;

const StyledDescription = styled.p`
    display: block;
    font-size: 1.125rem; // 18px -> 1.125rem
    font-weight: 300;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
`;

const StyledNote = styled.span`
    font-size: 1rem; // 16px -> 1rem
    font-weight: 400;
    margin-bottom: 1.25rem; // 20px -> 1.25rem
`;

const StyledLinks = styled.div`
    display: flex;
`;

const StyledLink = styled.a`
    text-decoration: underline;
    cursor: pointer;
    margin-left: 1.25rem; // 20px -> 1.25rem
    margin-right: 1.875rem; // 30px -> 1.875rem
   
`;
