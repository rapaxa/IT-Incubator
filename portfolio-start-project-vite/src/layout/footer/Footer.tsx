import styled from "styled-components";
import {StyledSpan} from "../../components/StyledSpan.tsx";
import { SectionsWrapper} from "../../components/Container.tsx";
import {FlexWrapperStyled} from "../../components/FlexWrapper.tsx";
import {SocialList} from "../../components/menu/SocialList.tsx";
import {MenuLinks} from "../../components/menu/MenuLinks.tsx";
import {Icon} from "../../components/icons/Icon.tsx";

export const Footer = () => {
    return (
        <SectionsWrapper $alightItems={"center"} $justify={"center"}>
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
        </SectionsWrapper>
    );
};
// const StyledFooter = styled.footer`
//     display: flex;
//     justify-content: center;
//     align-content: center;
// `
const StyledTitle = styled.h3`
    font-family: "DM Sans", sans-serif;
    font-weight: 700;
    font-size: 3.625rem;
    color: #1E0E62;
    text-align: center;
`
const ContactsItems = styled.ul`
    display: flex;
    align-items: center;
    gap: 3.875rem;
`
const StyledFooterContactsContainer = styled.div`
    border-bottom: rgba(102, 102, 102, 0.3) 2px solid;

    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`
const FooterMenu = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;`
const FooterText = styled.p`
`


