import styled from "styled-components";
import {theme} from "../../styles/theme.ts";

export const StyledTitle = styled.h3`
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
export const ContactsItems = styled.ul`
    display: flex;
    align-items: center;
    gap: 3.875rem;
    @media ${theme.media.tablet} {
        flex-direction: column;
    }
    
`
export const StyledFooterContactsContainer = styled.div`
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
export const FooterMenu = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;`
export const FooterText = styled.p`
`


