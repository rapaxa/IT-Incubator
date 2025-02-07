import styled from "styled-components";
import {FlexWrapperStyled} from "../FlexWrapper.tsx";
import {theme} from "../../styles/theme.ts";

export const MenuLinks = () => {
    return (
        <NavBar as={'nav'} $justifyC='center' $alignI='center'>
            <MenuList>
                <MenuItem>
                    <MenuLink href="">Home</MenuLink>
                </MenuItem>
                <MenuItem>
                    <MenuLink href="">About</MenuLink>
                </MenuItem>
                <MenuItem>
                    <MenuLink href="">Tech Stack</MenuLink>
                </MenuItem>
                <MenuItem>
                    <MenuLink href="">Projects</MenuLink>
                </MenuItem>
                <MenuItem>
                    <MenuLink href="">Contact</MenuLink>
                </MenuItem>
            </MenuList>
        </NavBar>
    );
};

const NavBar = styled(FlexWrapperStyled)`
    padding: 0;
`;

const MenuList = styled.ul`
    display: flex;
    gap: 3.563rem;
    list-style: none;
    padding: 0;
    margin: 0;
    @media ${theme.media.tablet }{
        display: none;
        
        
    }
`;

const MenuItem = styled.li`
    text-align: center;
    flex-wrap: wrap;
`;

const MenuLink = styled.a`
    text-decoration: none;
    font-size: 1.25rem;
    font-family: "DM Sans", serif;
    font-weight: 500;
    line-height: 1.625rem;
    color: #666666;

    &:hover {
        color: #333333; /* Добавил эффект наведения */
    }
`;
