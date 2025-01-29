import styled from "styled-components";
import {Icon} from "../icons/Icon.tsx";
import {FlexWrapperStyled} from "../FlexWrapper.tsx";

export const Menu = () => {
    return (
        <NavBar as={'nav'} $justifyC='space-between' $alignI='center'>
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
            <SocialList>
                <SocialItem>
                    <a href="">
                        <Icon iconId={"gitSvg"} width={"30"} height={"30"} viewBox={"0 0 30 30"}/>
                    </a>
                </SocialItem>
                <SocialItem>
                    <a href="">
                        <Icon iconId={"linkInSvg"} width={"30"} height={"30"} viewBox={"0 0 30 30"}/>
                    </a>
                </SocialItem>
                <SocialItem>
                    <a href="">
                        <Icon iconId={"twitterSvg"} width={"30"} height={"30"} viewBox={"0 0 30 30"}/>
                    </a>
                </SocialItem>
            </SocialList>
        </NavBar>
    );
};

const NavBar = styled(FlexWrapperStyled)`
    padding: 0;
`;

const MenuList = styled.ul`
    display: flex;
    gap: 57px;
    list-style: none;
    padding: 0;
    margin: 0;
`;

const MenuItem = styled.li`
    text-align: center;
`;

const MenuLink = styled.a`
    text-decoration: none;
    font-size: 1.25rem;
    font-family: "DM Sans", serif;
    font-weight: 500;
    line-height: 26px;
    color: #666666;

    &:hover {
        color: #333333; /* Добавил эффект наведения */
    }
`;

const SocialList = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;
    padding: 51px;
    margin: 0;
`;

const SocialItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;

    a {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;
