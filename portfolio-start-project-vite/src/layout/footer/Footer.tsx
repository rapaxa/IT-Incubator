import styled from "styled-components";
import {StyledSpan} from "../../components/StyledSpan.tsx";
import {SectionsWrapper} from "../../components/SectionWrapper.tsx";
import {FlexWrapperStyled} from "../../components/FlexWrapper.tsx";
import {SocialList} from "../../components/menu/SocialList.tsx";
import {MenuLinks} from "../../components/menu/MenuLinks.tsx";
import {Icon} from "../../components/icons/Icon.tsx";
import {Container} from "../../components/menu/Container.tsx";
import {theme} from "../../styles/theme.ts";

export const Footer = () => {
    return (
        <SectionsWrapper as = "footer"  direction="row" >
            <Container direction="column" justify="space-around">
                <FlexWrapperStyled>
                    <StyledTitle>For any questions please mail me:<br/>
                        <StyledSpan>hi@pavanmg.in</StyledSpan>
                    </StyledTitle>
                </FlexWrapperStyled>
                <StyledFooterContactsContainer>
                    <a href="">
                        <Icon iconId={"logoFooterSvg"} width={"97"} height={"58"} viewBox={"0 0 97 58"}/>
                    </a>
                    <ContactsItems>
                        <li>+91 12345 09876</li>
                        <li>info@example.com</li>
                        <li><SocialList/></li>
                    </ContactsItems>
                </StyledFooterContactsContainer>
                <FooterMenu>
                    <MenuLinks/>
                    <FooterText>
                        Designed and built by
                        <StyledSpan>Pavan</StyledSpan>
                        MG with
                        <StyledSpan>Love</StyledSpan> &
                        <StyledSpan>Coffee</StyledSpan>
                    </FooterText>
                </FooterMenu>
            </Container>

        </SectionsWrapper>
    );
};
//
const StyledTitle = styled.h3`
    font-family: "DM Sans", sans-serif;
    font-weight: 700;
    font-size: 3.625rem;
    color: #1E0E62;
    text-align: center;
    @media ${theme.media.tablet} {
        font-size: 2.625rem;
        text-align: center;
    }
    

`
const ContactsItems = styled.ul`
    display: flex;
    align-items: center;
    gap: 3.875rem;
    @media ${theme.media.tablet} {
        flex-direction: column;
    }
    
`
const StyledFooterContactsContainer = styled.div`
    border-bottom: rgba(102, 102, 102, 0.3) 2px solid;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    @media ${theme.media.tablet} {
        display: flex;
        flex-direction: column;
    }
`
const FooterMenu = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;`
const FooterText = styled.p`
`


