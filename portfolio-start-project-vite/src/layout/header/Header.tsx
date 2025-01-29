import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";

export const Header = () => {
    return (
        <HeaderStyle>
            <Logo/>
            <Menu/>
        </HeaderStyle>
    )
}

const HeaderStyle = styled.header`
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 1240px;
    height: 80px;
    background: white;
    z-index: 1000;
`;
