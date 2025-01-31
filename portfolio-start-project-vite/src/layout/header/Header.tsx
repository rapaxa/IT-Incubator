import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";

export const Header = () => {
    return (
        <HeaderStyle>
            <HeaderWrapper>
                <Logo/>
                <Menu/>
            </HeaderWrapper>
        </HeaderStyle>
    )
}

const HeaderStyle = styled.header`
    width: 100%;
    max-width: 1640px;
    background: white;
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    left: 0;
    margin: 0 auto;
    height: 10vh;
    z-index: 1000;
    
`;
const HeaderWrapper = styled.div`
    position: relative;
    left: 50%;
    width: 100%;
    display: flex;
    max-width: 1240px;
    justify-content: space-between;
    align-items: center;
    transform: translateX(-50%);
  



`
